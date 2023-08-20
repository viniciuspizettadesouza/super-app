import React from "react";

interface Book {
  id: number;
  Title: string;
  Author: string;
  Edition: number;
}

interface SortingResult {
  rule: string;
  value: string;
}

const BookSortingComponent: React.FC = () => {
  const books: Book[] = [
    {
      id: 1,
      Title: "Java How To Program",
      Author: "Deitel & Deitel",
      Edition: 2007,
    },
    {
      id: 2,
      Title: "Patterns of Enterprise Application Architecture",
      Author: "Martin Fowler",
      Edition: 2002,
    },
    {
      id: 3,
      Title: "Head First Design Patterns",
      Author: "Elisabeth Freeman",
      Edition: 2004,
    },
    {
      id: 4,
      Title: "Internet & World Wide Web: How to Program",
      Author: "Deitel & Deitel",
      Edition: 2007,
    },
  ];

  const sortByTitleAscending = (a: Book, b: Book): number =>
    a.Title.localeCompare(b.Title);

  const sortByAuthorAscending = (a: Book, b: Book): number =>
    a.Author.localeCompare(b.Author);

  const sortByEditionDescending = (a: Book, b: Book): number =>
    b.Edition - a.Edition;

  const generateResult = (
    rule: string | null,
    sortFunction: (a: Book, b: Book) => number
  ): string => {
    if (rule === null) {
      return "Ordering Exception";
    } else if (rule === "") {
      return "(Empty)";
    }

    const sortedBooks = [...books].sort(sortFunction);
    const bookIDs = sortedBooks.map((book) => book.id).join(", ");
    return `Books ${bookIDs}`;
  };

  const results: SortingResult[] = [
    {
      rule: "Title Ascending",
      value: generateResult("Title Ascending", sortByTitleAscending),
    },
    {
      rule: "Author Ascending, Title Descending",
      value: generateResult("Author Ascending, Title Descending", (a, b) => {
        const authorComparison = sortByAuthorAscending(a, b);
        return authorComparison !== 0
          ? authorComparison
          : -sortByTitleAscending(a, b);
      }),
    },
    {
      rule: "Edition Descending, Author Descending, Title Ascending",
      value: generateResult(
        "Edition Descending, Author Descending, Title Ascending",
        (a, b) => {
          const editionComparison = sortByEditionDescending(a, b);
          if (editionComparison !== 0) return editionComparison;
          const authorComparison = sortByAuthorAscending(a, b);
          return authorComparison !== 0
            ? -authorComparison
            : sortByTitleAscending(a, b);
        }
      ),
    },
    {
      rule: "Null",
      value: generateResult(null, sortByTitleAscending),
    },
    {
      rule: "(Empty)",
      value: generateResult("", sortByTitleAscending),
    },
  ];

  const renderBookTable = (bookList: Book[]) => (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edition Year</th>
        </tr>
      </thead>
      <tbody>
        {bookList.map((book, _) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.Title}</td>
            <td>{book.Author}</td>
            <td>{book.Edition}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderResultsTable = (data: SortingResult[]) => (
    <table>
      <thead>
        <tr>
          <th>Sorting Rules</th>
          <th>Expected Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((result, index) => (
          <tr key={index}>
            <td>{result.rule}</td>
            <td>{result.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <div>
        <h2>Initial List</h2>
        {renderBookTable(books)}
      </div>
      <div>
        <h2>Sorting Results</h2>
        {renderResultsTable(results)}
      </div>
    </div>
  );
};

export default BookSortingComponent;
