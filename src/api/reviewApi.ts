import { Review } from "../models/review";
import { PaginatedResponse } from "../types/PaginatedResponse";
import apiClient from "./axiosConfig";

/**
 * Fetches a paginated list of reviews for a specific book by its id
 * @param bookId The id of the book to retrieve reviews for
 * @param page The page number for pagination
 * @param size The number of reviews per page
 * @returns A paginated response containing review data
 */
export const getBookReviewById = async (
  bookId: string | undefined,
  page: number,
  size: number
): Promise<PaginatedResponse<Review>> => {
  const response = await apiClient.get(
    `/reviews/book/${bookId}?page=${page}&size=${size}`
  );

  return response.data;
};
