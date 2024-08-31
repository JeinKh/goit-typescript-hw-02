import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMassage";
import axios from "axios";
import { Image } from "../../../types";

interface FetchImageResponce {
  total: number;
  total_pages: number;
  results: Image[];
}

const App: FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const fetchImages = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get<FetchImageResponce>(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query,
            page,
            client_id: "ENy3U_6hZ63GrxnCWX1HQ2HokdsFBjo2O4Dl2a5m_e0",
          },
        }
      );
      if (response.data.results.length === 0) {
        setError("Oops...There are no images found");
      }
      setImages((prev) => [...prev, ...response.data.results]);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message || "Error fetching images");
      }
      setError("Error fetching images");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSearch = (searchQuery: string): void => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = (): void => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (image: Image): void => {
    setSelectedImage(image);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
