export type BookOnSearch = (query: string, target: BookSearchTargetEng) => void;
export type BookSearchTargetEng = '' | 'title' | 'isbn' | 'publisher' | 'person';
export type BookSearchTargetKor = '제목' | 'isbn' | '출판사' | '저자명';
