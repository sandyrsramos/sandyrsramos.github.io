import Iinformation, { IPageObj, IEventObj } from "./iInformation";

const information: Iinformation = {
  fullName: "Sandy Rayanne da Silva Ramos",
  firstName: "Sandy",
  surname: "Ramos",
  displayName: "Sandy Ramos",
  initials: "SR",
  location: "Recife, Pernambuco - Brasil",
  locationLink: "https://www.google.com/maps/place/Recife",
  avatarUrl: "https://media.licdn.com/dms/image/D4D03AQH3Egups8_h5A/profile-displayphoto-shrink_800_800/0/1698688879682?e=1712793600&v=beta&t=wME_26dD75yUd1oFDx8iAfKNb7g6rJxrTsnOzGdR0dk",
  about: [
    "Meu ponto de encontro é o cruzamento entre Turismo e comunicação!",
    "Gerencio e monitoro redes sociais, produzo conteúdos digitais, copywriting, edição de vídeos, colaboração em campanhas publicitárias, auxílio em produção audiovisual, roteirização e apresentação.",
    "Na área do Turismo atuo em produção de eventos, oficinas e projetos, roteiros turísticos e nas demais demandas relacionadas ao setor turístico.",
  ],
  pages: [
    {
      title: "Sobre Mim",
      url: "/",
    },
    {
      title: "Formação",
      url: "/",
    },
    { 
      title: "Currículo",
      url: "/",
    },
    {
      title: "Eventos",
      url: "/eventos"
    },
    {
      title: "Contato",
      url: "/",
    },
  ],
  socialPages: [
    { 
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/sandyram0s/"
    },
  ],
  eventPageDesc: "Uma descrição muito criativa dos meus eventos.",
  events: [
    {
      title: "Test Event",
      date: "22/02/2022",
      shortDescription: "An awesome test event description.",
      description: "A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event.",
      eventPhotos: [
        "https://media.licdn.com/dms/image/D4D22AQERkhMSq0O2kQ/feedshare-shrink_1280/0/1702672292269?e=1709769600&v=beta&t=Up8gTZjG54u_XB8zI7Z-HlWER6RGQQYk27U1f3Fh4Cw",
        "https://media.licdn.com/dms/image/D4D22AQGCATnoBvpdPg/feedshare-shrink_1280/0/1702672292536?e=1709769600&v=beta&t=RAgEIvndz0mTZCX4gJ4w8NAORKam4gq4PfxtSuqP-gU",
        "https://media.licdn.com/dms/image/D4D22AQGXbrhjUvSvAg/feedshare-shrink_1280/0/1702672293418?e=1709769600&v=beta&t=UoSD80dX9E7lTr7MW8PM9drJrvLRitjOpMXl5U9e0xs",
        "https://media.licdn.com/dms/image/D4D22AQHFiCFSboZdEg/feedshare-shrink_1280/0/1702672293866?e=1709769600&v=beta&t=FbiFmnwyEM-4eCvGv-XC53bK71VJYTp5bIjmD-4CEa4",
      ],
      additionalLink: "https://www.linkedin.com/feed/update/urn:li:activity:7141525217440436224/",
    },
    {
      title: "Test Event",
      date: "23/03/2023",
      shortDescription: "An awesome test event description.",
      description: "A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event. A very long description for this awesome event.",
      eventPhotos: [
        "https://media.licdn.com/dms/image/D4D22AQERkhMSq0O2kQ/feedshare-shrink_1280/0/1702672292269?e=1709769600&v=beta&t=Up8gTZjG54u_XB8zI7Z-HlWER6RGQQYk27U1f3Fh4Cw",
        "https://media.licdn.com/dms/image/D4D22AQGCATnoBvpdPg/feedshare-shrink_1280/0/1702672292536?e=1709769600&v=beta&t=RAgEIvndz0mTZCX4gJ4w8NAORKam4gq4PfxtSuqP-gU",
        "https://media.licdn.com/dms/image/D4D22AQGXbrhjUvSvAg/feedshare-shrink_1280/0/1702672293418?e=1709769600&v=beta&t=UoSD80dX9E7lTr7MW8PM9drJrvLRitjOpMXl5U9e0xs",
        "https://media.licdn.com/dms/image/D4D22AQHFiCFSboZdEg/feedshare-shrink_1280/0/1702672293866?e=1709769600&v=beta&t=FbiFmnwyEM-4eCvGv-XC53bK71VJYTp5bIjmD-4CEa4",
      ],
      additionalLink: "https://www.linkedin.com/feed/update/urn:li:activity:7141525217440436224/",
    }
  ],
}

export const pages: Array<IPageObj> = information.pages;
export const socialPages: Array<IPageObj> = information.socialPages;
export const events: Array<IEventObj> = information.events;
export default information;