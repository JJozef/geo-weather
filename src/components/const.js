const DefaultCitys = [
  {
    name: 'Japan',
    city: 'Tokyo',
    country: 'JP'
  },
  {
    name: 'Chile',
    city: 'Santiago',
    country: 'CL'
  },
  {
    name: 'Argentina',
    city: 'Buenos Aires',
    country: 'AR'
  },
  {
    name: 'Peru',
    city: 'Lima',
    country: 'PE'
  },
  {
    name: 'Colombia',
    city: 'Bogota',
    country: 'CO'
  },
  {
    name: 'Mexico',
    city: 'Mexico City',
    country: 'MX'
  },
  {
    name: 'United States',
    city: 'New York',
    country: 'US'
  },
  {
    name: 'United Kingdom',
    city: 'London',
    country: 'GB'
  },
  {
    name: 'Spain',
    city: 'Madrid',
    country: 'ES'
  },
  {
    name: 'Italy',
    city: 'Rome',
    country: 'IT'
  },
  {
    name: 'France',
    city: 'Paris',
    country: 'FR'
  },
  {
    name: 'Germany',
    city: 'Berlin',
    country: 'DE'
  },
  {
    name: 'Brazil',
    city: 'Sao Paulo',
    country: 'BR'
  },
  {
    name: 'Canada',
    city: 'Toronto',
    country: 'CA'
  }
]

export const randomCity =
  DefaultCitys[Math.floor(Math.random() * DefaultCitys.length)]

export const GoogleMapStyles = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff'
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#3e606f'
      },
      {
        weight: 2
      },
      {
        gamma: 0.84
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        weight: 0.6
      },
      {
        color: '#222e36'
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#000000'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#1a528b'
      },
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#222e36'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#ff0000'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#406d80'
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#000000'
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2c5a71'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#66a9ee'
      },
      {
        lightness: -37
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#313a40'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#364148'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'on'
      },
      {
        lightness: '0'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [
      {
        lightness: '-11'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ff7e4e'
      },
      {
        visibility: 'simplified'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#31393f'
      }
    ]
  },
  {
    featureType: 'transit.station.airport',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#182a3d'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#1d2226'
      }
    ]
  }
]
