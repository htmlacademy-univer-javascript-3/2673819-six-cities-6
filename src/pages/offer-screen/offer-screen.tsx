import Offer from '../../components/offer/offer.tsx';
import {NearPlacesList} from '../../components/near-places-list/near-places-list.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {OfferProps} from '../../types/offer.ts';
import {fetchReviews, fetchOffer, fetchNearby} from '../../store/api-actions.ts';
import {setComments, setNearBy, setOffer} from '../../store/offer-process/offer-process.ts';
import {Header} from '../../components/header/header.tsx';

function OfferScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const offer = useAppSelector((state) => state.Offer.offer);
  const comments = useAppSelector((state) => state.Offer.comments);

  const {id} = useParams<{id: OfferProps['id']}>();
  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchReviews(id));
      dispatch(fetchNearby(id));
    }
    return () => {
      dispatch(setOffer(null));
      dispatch(setComments([]));
      dispatch(setNearBy([]));
    };
  }, [dispatch, id]);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        {offer && (
          <>
            <Offer offer={offer} reviews={comments}/>
            <NearPlacesList/>
          </>
        )}

      </main>
    </div>

  );
}

export default OfferScreen;
