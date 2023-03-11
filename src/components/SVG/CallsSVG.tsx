import React from 'react';

export type SVGProps = {
  id: string;
};

const CallsSVG: React.FC<SVGProps> = ({ id }) => {
  switch (id) {
    case 'incoming':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z"
            fill="#005FF8"
          />
        </svg>
      );
    case 'outgoing':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.99999 17.3447L7.17703 18.5217L16.8522 8.8466V14.3478H18.5217V5.99999L10.1739 5.99999V7.66955L15.6751 7.66955L5.99999 17.3447Z"
            fill="#28A879"
          />
        </svg>
      );
    case 'missedIncoming':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z"
            fill="#EA1A4F"
          />
        </svg>
      );
    case 'missedOutgoing':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.99999 17.3447L7.17703 18.5217L16.8522 8.8466V14.3478H18.5217V5.99999L10.1739 5.99999V7.66955L15.6751 7.66955L5.99999 17.3447Z"
            fill="#EA1A4F"
          />
        </svg>
      );
    case 'arrowLeft':
      return (
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_60_3453)">
            <path d="M6.175 15.825L2.35833 12L6.175 8.175L5 7L0 12L5 17L6.175 15.825Z" />
          </g>
          <defs>
            <clipPath id="clip0_60_3453">
              <rect width="16" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'arrowRight':
      return (
        <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_60_3459)">
            <path d="M9.58984 15.825L13.4065 12L9.58984 8.175L10.7648 7L15.7648 12L10.7648 17L9.58984 15.825Z" />
          </g>
          <defs>
            <clipPath id="clip0_60_3459">
              <rect width="17" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'calendar':
      return (
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z" />
        </svg>
      );
    case 'arrowTop':
      return (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.0999194 5.23086L0.600886 5.73179C0.66764 5.79869 0.744536 5.83203 0.83147 5.83203C0.918194 5.83203 0.995055 5.79869 1.06181 5.7318L4.99995 1.79387L8.93791 5.73169C9.0047 5.79858 9.08156 5.83193 9.16839 5.83193C9.25525 5.83193 9.33211 5.79858 9.39887 5.73169L9.89976 5.23072C9.96666 5.16397 10 5.08711 10 5.00025C10 4.91345 9.96655 4.83659 9.89976 4.76984L5.23043 0.100393C5.16367 0.0336042 5.08678 0.000227499 4.99995 0.000227491C4.91312 0.000227483 4.83636 0.0336042 4.76964 0.100393L0.0999194 4.76984C0.033166 4.83662 8.03017e-08 4.91349 7.27171e-08 5.00024C6.51232e-08 5.08711 0.033166 5.16397 0.0999194 5.23086Z"
            fill="#002CFB"
          />
        </svg>
      );
    case 'arrowDown':
      return (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.90008 0.601167L9.39911 0.100235C9.33236 0.0333416 9.25546 0 9.16853 0C9.08181 0 9.00494 0.0333416 8.93819 0.100235L5.00005 4.03816L1.06209 0.100341C0.995301 0.033447 0.918439 0.000105232 0.831611 0.000105232C0.744747 0.000105232 0.667886 0.033447 0.601132 0.100341L0.100235 0.601308C0.0333416 0.668061 0 0.744922 0 0.831786C0 0.91858 0.0334469 0.995441 0.100235 1.06219L4.76957 5.73164C4.83633 5.79843 4.91322 5.8318 5.00005 5.8318C5.08688 5.8318 5.16364 5.79843 5.23036 5.73164L9.90008 1.06219C9.96683 0.995406 10 0.918545 10 0.831786C10 0.744922 9.96683 0.668061 9.90008 0.601167Z"
            fill="#ADBFDF"
          />
        </svg>
      );
    case 'play':
      return (
        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.287422 0.0693819C0.376104 0.0231631 0.475355 0 0.574754 0C0.673886 0 0.773106 0.0231631 0.862176 0.0693819L7.71255 4.55186C7.89006 4.64422 8 4.81521 8 5.00008C8 5.18493 7.89036 5.3559 7.71255 5.44814L0.862176 9.93081C0.684394 10.0231 0.465233 10.0231 0.287571 9.93081C0.109759 9.83824 0 9.6672 0 9.48246V0.51755C0 0.332781 0.10958 0.16182 0.287422 0.0693819Z"
            fill="#002CFB"
          />
        </svg>
      );
    case 'pause':
      return (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 8H2.66667V0H0V8ZM5.33333 0V8H8V0H5.33333Z" fill="#002CFB" />
        </svg>
      );
    case 'download':
      return (
        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 16H13V14.1176H0V16ZM13 5.64706H9.28571V0H3.71429V5.64706H0L6.5 12.2353L13 5.64706Z" />
        </svg>
      );
    case 'close':
      return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
        </svg>
      );
    default:
      return <div></div>;
  }
};

export default CallsSVG;
