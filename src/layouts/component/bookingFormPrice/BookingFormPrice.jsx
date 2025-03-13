import React from 'react'

function BookingFormPrice() {
  return (
    <div className="bg-[#F7F1E8] p-8 rounded-lg max-w-md mx-auto border">
      {/* Title */}
      <h2 className="text-3xl font-serif italic font-bold">Main House</h2>

      {/* Guest & Price Section */}
      <div className="flex justify-between items-center mt-4 border-t border-gray-300 pt-4">
        {/* Guest Info */}
        <div className="text-center w-1/2">
          <p className="text-sm text-gray-600">GUESTS</p>
          <p className="text-2xl font-semibold">0 - 16</p>
        </div>

        {/* Pricing Info */}
        <div className="w-1/2 text-right">
          <div className="mb-2">
            <p className="text-xs text-gray-500 uppercase">Apr - Oct PRICE (p/n)</p>
            <p className="text-2xl font-bold">$4000</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Nov - Mar PRICE (p/n)</p>
            <p className="text-2xl font-bold">$6000</p>
          </div>
        </div>
      </div>

      {/* Features List */}
      <ul className="mt-6 space-y-3 text-gray-700">
        <li className="flex items-start">
          <span className="text-yellow-500 text-lg mr-2">●</span> Main House with 7 bedrooms
        </li>
        <li className="flex items-start">
          <span className="text-yellow-500 text-lg mr-2">●</span> Exclusive use of the complete property
        </li>
        <li className="flex items-start">
          <span className="text-yellow-500 text-lg mr-2">●</span> Private beach walking access
        </li>
        <li className="flex items-start">
          <span className="text-yellow-500 text-lg mr-2">●</span> Breakfast provisions provided
        </li>
      </ul>

      {/* Footnote */}
      <p className="mt-4 text-xs text-gray-600">
        *Main House can accommodate up to 16 guests with 7 bedrooms. An extra 4 guests can be
        accommodated in the stables. ($500 per stable per night)
      </p>
      <p className="text-xs text-gray-600 mt-1">Rates are in NZD and include taxes.</p>
    </div>
  )
}

export default BookingFormPrice