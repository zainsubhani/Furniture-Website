/* This example requires Tailwind CSS v2.0+ */
export default function Year() {
  return (
    <div className="relative">
      <div className="absolute  h-1/4 " />
      <div className="relative max-w-7xl  sm:px-6 lg:px-2">
        <div className="max-w-6xl mx-auto">
          <dl className="rounded-lg bg-[#286F6C] py-5 shadow-lg grid lg:grid-cols-4 sm:grid-cols-3">
            <div className="flex flex-col  border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Year
              </dt>
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Experience
              </dt>
              <dd className="order-1 text-5xl tracking-tight font-bold text-[white]">
                7
              </dd>
            </div>
            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Opened in
              </dt>
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                the country
              </dt>
              <dd className="order-1 text-5xl tracking-tight font-bold text-[white]">
                2
              </dd>
            </div>
            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Furniture
              </dt>
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                sold
              </dt>
              <dd className="order-1 text-5xl tracking-tight font-bold text-[white]">
                10k+
              </dd>
            </div>
            <div className="flex flex-col  p-6 text-center sm:border-0 sm:border-r">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                Variant
              </dt>
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                furniture
              </dt>
              <dd className="order-1 text-5xl tracking-tight font-bold text-[white]">
                260+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
