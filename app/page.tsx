import Pagination from "./components/Pagination";

export default function HomePage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <Pagination
      currentPage={parseInt(searchParams.page)}
      pageSize={10}
      itemCount={100}
    />
  );
}
