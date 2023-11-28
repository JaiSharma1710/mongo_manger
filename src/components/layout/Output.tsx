const Output = ({ queryResponse }: any) => {
  if (!queryResponse.length) {
    return (
      <div className="h-1/3 border">
        <p className="bg-green-50 text-green-700 h-full flex justify-center items-center">
          no result
        </p>
      </div>
    );
  }
  try {
    return (
      <div className="h-1/3 border overflow-auto">
        {queryResponse.map((document: any, index: number) => {
          const list = Object.entries(document);
          return (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? 'bg-green-50 m-3 rounded-md'
                  : 'bg-green-100 m-3 rounded-md'
              }
            >
              {list.map((entry: any, index: number) => {
                return (
                  <p key={index} className="p-2">
                    {JSON.stringify(entry?.[0])}:{JSON.stringify(entry?.[1])}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  } catch (error) {
    <div className="h-1/3 border">
      <p className="bg-green-50 text-green-700 h-full flex justify-center items-center">
        something went wrong
      </p>
    </div>;
  }
};

export default Output;
const data = [
  {
    _id: '5ae6d813e5504726a69fc3df',
    vtId: '3dc0002b7e4c43ee8f3866232c5bf037',
    updatedAt: '2023-11-28T04:43:37.153Z',
    createdAt: '2018-04-30T08:47:15.169Z',
    name: 'iQ Grove',
    description: '<p>44</p>',
    minPrice: 255,
    baseCurrencyCode: 'GBP',
    address: '69 Grove St, Edinburgh EH3 8FD, United Kingdom',
    city: 'Edinburgh',
    type: 'APARTMENT',
    cityId: '5a65fd27b0920aa9efdf5dcf',
    country: 'United Kingdom',
    neighbourhood: '',
    location: [-3.2118524, 55.9444012],
    rating: 4,
    distanceFromCityCenter: 1.6,
    bookingProcedure:
      '<p>1. The listed prices are per person, per week.</p>\n<p>2. The rent may be paid via debit/credit cards or bank transfer.</p>\n<p>3. The rent may be paid either in full or in four installments without a UK-based guarantor.</p>\n<p>4.  An amount of £200 must be paid to secure a booking for Sep 2023/2024 and £100 for April 2023 bookings.</p>\n',
    nearbyUniversities: [
      {
        _id: '5af3e13bc9a12b6101b4bc97',
        placeId: 'ChIJXTtsFYbHh0gR7sC7kNMoGbI',
        hasCampus: true,
        slug: 'the-university-of-edinburgh',
        country: 'United Kingdom',
        city: 'Edinburgh',
        name: 'The University of Edinburgh',
        campus: [
          {
            _id: '5af3e13bc9a12b6101b4bc98',
            name: 'The University of Edinburgh',
            isMainCampus: true,
            slug: 'the-university-of-edinburgh',
            lng: -3.1892413,
            lat: 55.9445158,
            transit: {
              distance: '1.1 mi',
              public: '14 mins',
              driving: '14 mins',
              walking: '24 mins',
            },
          },
        ],
      },
    ],
  },
  {
    _id: '5ae6d813e5504726a69fc3df',
    vtId: '3dc0002b7e4c43ee8f3866232c5bf037',
    updatedAt: '2023-11-28T04:43:37.153Z',
    createdAt: '2018-04-30T08:47:15.169Z',
    name: 'iQ Grove',
    description: '<p>44</p>',
    minPrice: 255,
    baseCurrencyCode: 'GBP',
    address: '69 Grove St, Edinburgh EH3 8FD, United Kingdom',
    city: 'Edinburgh',
    type: 'APARTMENT',
    cityId: '5a65fd27b0920aa9efdf5dcf',
    country: 'United Kingdom',
    neighbourhood: '',
    location: [-3.2118524, 55.9444012],
    rating: 4,
    distanceFromCityCenter: 1.6,
    bookingProcedure:
      '<p>1. The listed prices are per person, per week.</p>\n<p>2. The rent may be paid via debit/credit cards or bank transfer.</p>\n<p>3. The rent may be paid either in full or in four installments without a UK-based guarantor.</p>\n<p>4.  An amount of £200 must be paid to secure a booking for Sep 2023/2024 and £100 for April 2023 bookings.</p>\n',
    nearbyUniversities: [
      {
        _id: '5af3e13bc9a12b6101b4bc97',
        placeId: 'ChIJXTtsFYbHh0gR7sC7kNMoGbI',
        hasCampus: true,
        slug: 'the-university-of-edinburgh',
        country: 'United Kingdom',
        city: 'Edinburgh',
        name: 'The University of Edinburgh',
        campus: [
          {
            _id: '5af3e13bc9a12b6101b4bc98',
            name: 'The University of Edinburgh',
            isMainCampus: true,
            slug: 'the-university-of-edinburgh',
            lng: -3.1892413,
            lat: 55.9445158,
            transit: {
              distance: '1.1 mi',
              public: '14 mins',
              driving: '14 mins',
              walking: '24 mins',
            },
          },
        ],
      },
    ],
  },
];
