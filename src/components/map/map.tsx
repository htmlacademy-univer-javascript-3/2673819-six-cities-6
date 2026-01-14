import {useEffect, useRef} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import {CityProps} from '../../types/city.ts';
import useMap from '../../hooks/use-map.tsx';
import {OfferPreviewProps} from '../../types/offer.ts';

type MapProps = {
  chosenId: string | null;
  city: CityProps;
  offers: OfferPreviewProps[];
};

const defaultCustomIcon = new Icon({
  iconUrl: '../../../markup/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: '../../../markup/img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {chosenId, city, offers} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            chosenId !== null && chosenId === offer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, chosenId, mapRef]);

  return <section className="cities__right-section" ref={mapRef}></section>;
}

export default Map;
