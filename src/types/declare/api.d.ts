declare namespace Response {
  interface BookMeta {
    total_count: number;
    pageable_count: number;
    is_end: boolean;
  }

  interface BookDocument {
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
}
