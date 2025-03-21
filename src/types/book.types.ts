import type { InfiniteData } from '@tanstack/react-query';

export interface BookMeta {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
}

export interface BookDocument {
  title: string;
  contents: string;
  url: string;
  isbn: string;
  dateTime: Date;
  authors: string[];
  publisher: string;
  translators: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  status: string;
}

interface BookResponse {
  meta: BookMeta;
  documents: BookDocument[];
}

export type InfiniteBookData = InfiniteData<BookResponse> | undefined;
