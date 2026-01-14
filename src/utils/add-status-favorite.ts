import {OfferPreviewProps} from '../types/offer.ts';
import {TChangeFavorite} from '../store/api-actions.ts';

type TEntrance = {
  id: OfferPreviewProps['id'];
  isFavorite: OfferPreviewProps['isFavorite'];
}

export function addStatusFavorite({id, isFavorite}: TEntrance): TChangeFavorite{
  const status = isFavorite ? 0 : 1;

  return {offerId: id, status};
}
