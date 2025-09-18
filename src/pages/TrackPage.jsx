import { useState } from 'react';
import { Plus, X, Clock, MapPin } from 'lucide-react';

export default function TrackPage() {
  const [trackingNumbers, setTrackingNumbers] = useState([{ id: 1, value: '', error: false }]);
  const [loading, setLoading] = useState(false);
  const [trackingResults, setTrackingResults] = useState(null);
  const [nextId, setNextId] = useState(2);

  // Mock tracking data for valid tracking numbers
  const mockTrackingData = {
    'SAA1824502025': {
      trackingNumber: 'SAA1824502025',
      status: 'Vessel Departed',
      currentLocation: 'USSAV',
      lastUpdate: 'Wednesday Aug 27th, 2025 9:11 AM',
      details: {
        origin: 'Atlanta, USA',
        destination: 'Wisconsin, USA',
        service: 'Air',
        packaging: 'Sensitive Package(Gold bars)',
        weight: '150 LBS ( L x W x H )',
        shipDate: '2025-07-15',
        vendor: 'Sherry Dellinger',
        courierTracking: '(C)362371,362364'
      },
      history: [
        {
          status: 'Vessel Departed',
          description: 'Thank you',
          location: 'USSAV',
          date: 'Aug 27th, 2025 9:11 AM',
          active: true
        },
        {
          status: 'Shipment loaded for voyage',
          description: 'Thank you',
          location: 'Atlanta',
          date: 'Aug 20th, 2025 1:05 PM',
          active: false
        },
        {
          status: 'Approved',
          description: 'Shipment approved and tracking number assigned',
          location: 'Location not specified',
          date: 'Aug 15th, 2025 9:45 AM',
          active: false
        },
        {
          status: 'SEA FRT',
          description: 'Thank you',
          location: 'Atlanta',
          date: 'Jul 21st, 2025 11:39 AM',
          active: false
        },
        {
          status: 'Received at Atlanta',
          description: 'Thank you',
          location: 'Atlanta',
          date: 'Jul 15th, 2025 10:22 AM',
          active: false
        }
      ]
    }
  };

  const addTrackingField = () => {
    setTrackingNumbers([...trackingNumbers, { id: nextId, value: '', error: false }]);
    setNextId(nextId + 1);
  };

  const removeTrackingField = (id) => {
    if (trackingNumbers.length > 1) {
      setTrackingNumbers(trackingNumbers.filter(item => item.id !== id));
    }
  };

  const updateTrackingNumber = (id, value) => {
    setTrackingNumbers(trackingNumbers.map(item => 
      item.id === id ? { ...item, value, error: false } : item
    ));
  };

  const simulateAPICall = () => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000); // 2 second delay to simulate API call
    });
  };

  const handleTrackShipment = async () => {
    const validNumbers = trackingNumbers.filter(num => num.value.trim() !== '');
    
    if (validNumbers.length === 0) return;

    setLoading(true);
    setTrackingResults(null);
    
    // Simulate API call
    await simulateAPICall();
    
    // Check if any tracking numbers are valid
    let foundValidTracking = false;
    let trackingData = null;
    
    const updatedTrackingNumbers = trackingNumbers.map(item => {
      if (item.value.trim() === '') return item;
      
      if (mockTrackingData[item.value.trim()]) {
        foundValidTracking = true;
        trackingData = mockTrackingData[item.value.trim()];
        return { ...item, error: false };
      } else {
        return { ...item, error: true };
      }
    });
    
    setTrackingNumbers(updatedTrackingNumbers);
    
    if (foundValidTracking) {
      setTrackingResults(trackingData);
    }
    
    setLoading(false);
  };

  const resetTracking = () => {
    setTrackingNumbers([{ id: 1, value: '', error: false }]);
    setTrackingResults(null);
    setNextId(2);
  };

  if (trackingResults) {
    return (
      <div className="min-h-screen bg-gray-50 pt-30 mb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header with Back Button */}
          <div className="mb-8">
            <button
              onClick={resetTracking}
              className="mb-4 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              ← Track Another Shipment
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Package Information</h1>
            <p className="text-gray-600 mt-2">
              Tracking Number: <span className="font-medium">{trackingResults.trackingNumber}</span>
            </p>
          </div>

          {/* Current Status */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{trackingResults.status}</h2>
                <p className="text-gray-600 flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4" />
                  Current Location: {trackingResults.currentLocation}
                </p>
                <p className="text-gray-500 text-sm mt-1">{trackingResults.lastUpdate}</p>
              </div>
            </div>
          </div>

          {/* Shipment Details */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipment Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600">Origin:</span>
                  <p className="font-medium text-gray-900">{trackingResults.details.origin}</p>
                </div>
                <div>
                  <span className="text-gray-600">Service:</span>
                  <p className="font-medium text-gray-900">{trackingResults.details.service}</p>
                </div>
                <div>
                  <span className="text-gray-600">Weight:</span>
                  <p className="font-medium text-gray-900">{trackingResults.details.weight}</p>
                </div>
                <div>
                  <span className="text-gray-600">Vendor:</span>
                  <p className="font-medium text-gray-900">{trackingResults.details.vendor}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600">Destination:</span>
                  <p className="font-medium text-gray-900">{trackingResults.details.destination}</p>
                </div>
                <div>
                  <span className="text-gray-600">Packaging:</span>
                  <p className="font-medium text-gray-900">{trackingResults.details.packaging}</p>
                </div>
                <div>
                  <span className="text-gray-600">Ship Date:</span>
                  <p className="font-medium text-gray-900">{trackingResults.details.shipDate}</p>
                </div>
                <div>
                  <span className="text-gray-600">Courier Tracking:</span>
                  <p className="font-medium text-gray-900">{trackingResults.details.courierTracking}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tracking History */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Tracking History</h2>
            <div className="space-y-4">
              {trackingResults.history.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`w-4 h-4 rounded-full mt-1 ${
                    event.active ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{event.status}</h3>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                    <p className="text-gray-500 text-sm">{event.location}</p>
                    <p className="text-gray-400 text-xs mt-1">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-24">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">
            Track Your Shipment
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
            Enter your tracking number(s) below to get real-time updates on your shipment 
            status and delivery information.
          </p>
        </div>

        {/* Tracking Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-4">
              Enter Your Tracking Number(s)
            </label>
            
            {/* Tracking Number Inputs */}
            <div className="space-y-3">
              {trackingNumbers.map((item, index) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={item.value}
                      onChange={(e) => updateTrackingNumber(item.id, e.target.value)}
                      placeholder="Enter your tracking number "
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-0 outline-none transition-colors text-gray-700 placeholder-gray-400 ${
                        item.error
                          ? 'border-red-500 focus:border-red-500 bg-red-50'
                          : 'border-gray-200 focus:border-indigo-500'
                      }`}
                    />
                    {item.error && (
                      <p className="text-red-500 text-sm mt-1">
                        No tracking data found for this number
                      </p>
                    )}
                  </div>
                  
                  {trackingNumbers.length > 1 && (
                    <button
                      onClick={() => removeTrackingField(item.id)}
                      className="p-3 bg-red-100 hover:bg-red-200 rounded-lg transition-colors"
                      title="Remove this tracking number"
                    >
                      <X size={20} className="text-red-600" />
                    </button>
                  )}
                  
                  {index === trackingNumbers.length - 1 && (
                    <button
                      onClick={addTrackingField}
                      className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                      title="Add another tracking number"
                    >
                      <Plus size={20} className="text-gray-600" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Track Button */}
          <div className="flex justify-end">
            <button
              onClick={handleTrackShipment}
              disabled={loading}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold rounded-lg transition-colors focus:ring-4 focus:ring-indigo-200 focus:outline-none flex items-center gap-2"
            >
              {loading && (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              )}
              {loading ? 'Tracking...' : 'Track Shipment'}
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            You can track multiple shipments by adding additional tracking numbers.
          </p>
          <p className="text-xs text-gray-400 mt-2">
           
          </p>
        </div>
      </div>
    </div>
  );
}