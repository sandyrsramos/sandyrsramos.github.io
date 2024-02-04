export interface IPageObj {
  title: string,
  url: string,
}

export interface IEventObj {
  title: string,
  date: `${number | null}${number}/${number}${number}/${number}${number}${number}${number}`,
  eventPhotos: Array<string>,
  shortDescription: string,
  description?: string,
  additionalLink?: string,
}

export default interface Iinformation {
  fullName: string,
  firstName: string,
  surname: string,
  initials: string,
  displayName: string,
  location: string,
  locationLink: string,
  avatarUrl: string,
  about: Array<string>,
  pages: Array<IPageObj>,
  socialPages: Array<IPageObj>,
  eventPageDesc: string,
  events: Array<IEventObj>,
}