export enum AppRoute {
  Login = '/login',
  Root = '/',
  Favorites = '/favorites',
  Offer = '/offer/',
  NotFound = '/not-found'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum TypeOffer {
  Hotel = 'hotel',
  Room = 'room',
  Apartment = 'apartment',
  House = 'house'
}

export enum APIRoute {
  Login = '/login',
  Offers = '/offers',
  Favorites = '/favorite',
  Reviews = '/reviews',
}

export const SortingOptionVariants = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
} as const;

