type Props = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (pageNumber: number) => void;
};
const Pagination = ({
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
}: Props) => {
  const pages = [];
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages === 1) return null;

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="mt-6 flex justify-center">
      <ul className="flex">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`${
                currentPage === page
                  ? "bg-gray-900 text-white"
                  : "text-gray-700"
              } rounded-md px-3 py-1 font-medium text-white transition-all hover:bg-white hover:text-black`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
