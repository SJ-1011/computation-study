export default function ShortQuestion() {
  return (
    <div className="flex flex-col px-5 py-7 bg-white rounded-2xl w-140 border border-gray-200">
      <p className="text-2xl font-bold mb-4">단답형 문제</p>
      <ul className="flex flex-col flex-nowrap gap-2">
        <li className="truncate border border-gray-200 cursor-pointer p-3 rounded-2xl">
          단답형 문제 1 123456452555222222222222255252552525252
        </li>
        <li className="truncate border border-gray-200 cursor-pointer p-3 rounded-2xl">
          단답형 문제 2
        </li>
        <li className="truncate border border-gray-200 cursor-pointer p-3 rounded-2xl">
          단답형 문제 3
        </li>
        <li className="truncate border border-gray-200 cursor-pointer p-3 rounded-2xl">
          단답형 문제 4
        </li>
        <li className="truncate border border-gray-200 cursor-pointer p-3 rounded-2xl">
          단답형 문제 5
        </li>
      </ul>
    </div>
  );
}
