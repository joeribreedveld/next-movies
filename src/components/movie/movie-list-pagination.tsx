import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";
import { TMovieResult } from "@/lib/types";

export default function MovieListPagination({
  moviesResult,
}: {
  moviesResult: TMovieResult;
}) {
  const currentPage = moviesResult.page;
  const totalPages = moviesResult.total_pages;

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`?page=${currentPage - 1}`} />
        </PaginationItem>

        {[...Array(Math.min(5, totalPages))].map((_, index) => {
          const pageIndex = Math.max(1, currentPage - 2) + index;

          if (pageIndex > totalPages) {
            return null;
          }

          return (
            <PaginationItem key={pageIndex}>
              <PaginationLink
                isActive={currentPage === pageIndex}
                href={`?page=${pageIndex}`}
              >
                {pageIndex}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext href={`?page=${currentPage + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
