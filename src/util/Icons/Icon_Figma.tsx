
export function Bookmark_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg width={w} height={w} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 9C4 6.17157 4 4.75736 4.87868 3.87868C5.75736 3 7.17157 3 10 3H14C16.8284 3 18.2426 3 19.1213 3.87868C20 4.75736 20 6.17157 20 9V15.8276C20 18.5109 20 19.8525 19.1557 20.2629C18.3114 20.6733 17.2565 19.8444 15.1465 18.1866L14.4713 17.656C13.2849 16.7239 12.6917 16.2578 12 16.2578C11.3083 16.2578 10.7151 16.7239 9.52871 17.656L8.85346 18.1866C6.74355 19.8444 5.68859 20.6733 4.84429 20.2629C4 19.8525 4 18.5109 4 15.8276V9Z" stroke={color} strokeWidth="2" />
    </svg>

  );
}

export function Ads_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg width={w} height={w} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 21L5.81092 17.9747C5.37149 10.9438 10.9554 5 18 5V5L16.7827 5.97387C14.3918 7.88656 13 10.7824 13 13.8442V13.8442C13 15.9831 11.0278 17.5774 8.93642 17.1292L6 16.5" stroke={color} strokeWidth="2" />
    </svg>

  );
}

export function Lock_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13C4 11.1144 4 10.1716 4.58579 9.58579C5.17157 9 6.11438 9 8 9H16C17.8856 9 18.8284 9 19.4142 9.58579C20 10.1716 20 11.1144 20 13V15C20 17.8284 20 19.2426 19.1213 20.1213C18.2426 21 16.8284 21 14 21H10C7.17157 21 5.75736 21 4.87868 20.1213C4 19.2426 4 17.8284 4 15V13Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M16 8V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7V8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="15" r="2" fill={color} />
    </svg>
  );
}


export function Money_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg width={w} height={w} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke={color} strokeWidth="2" />
      <path d="M6 9H8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 15H18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" stroke={color} strokeWidth="2" />
    </svg>

  )
}

export function World_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg width={w} height={w} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 6L18.0333 7.1C17.6871 7.35964 17.2661 7.5 16.8333 7.5H13.475C12.8775 7.5 12.3312 7.83761 12.064 8.37206V8.37206C11.7342 9.03161 11.9053 9.83161 12.476 10.2986L14.476 11.9349C16.0499 13.2227 16.8644 15.22 16.6399 17.2412L16.5936 17.6577C16.5314 18.2177 16.4102 18.7695 16.232 19.304L16 20" stroke={color} strokeWidth="2" />
      <path d="M2.5 10.5L5.7381 9.96032C7.09174 9.73471 8.26529 10.9083 8.03968 12.2619L7.90517 13.069C7.66434 14.514 8.3941 15.9471 9.70437 16.6022V16.6022C10.7535 17.1268 11.2976 18.3097 11.0131 19.4476L10.5 21.5" stroke={color} strokeWidth="2" />
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
    </svg>

  )
}

export function Unlock_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13.0002C4 11.1146 4 10.1718 4.58579 9.58603C5.17157 9.00024 6.11438 9.00024 8 9.00024H16C17.8856 9.00024 18.8284 9.00024 19.4142 9.58603C20 10.1718 20 11.1146 20 13.0002V15.0002C20 17.8287 20 19.2429 19.1213 20.1216C18.2426 21.0002 16.8284 21.0002 14 21.0002H10C7.17157 21.0002 5.75736 21.0002 4.87868 20.1216C4 19.2429 4 17.8287 4 15.0002V13.0002Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M16.5 9.00006L16.5776 8.37947C16.8365 6.30788 15.9043 4.2675 14.1688 3.10709V3.10709C12.1024 1.72543 9.36732 1.89573 7.48825 3.52305L6.66992 4.23174"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="15" r="2" fill={color} />
    </svg>
  );
}

export function Menu_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 23 23"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.51669 4.79613C5.84343 6.09112 4 8.83028 4 12C4 12.1969 4.00711 12.3921 4.0211 12.5855L10.1629 10.9398L8.51669 4.79613ZM11.4148 4.02107L13.1901 10.6463L13.2017 10.6897C13.2517 10.8754 13.3222 11.1373 13.3532 11.3775C13.3922 11.6802 13.4014 12.159 13.1197 12.6469C12.838 13.1348 12.4188 13.3662 12.1371 13.4838C11.9136 13.5771 11.6515 13.647 11.4657 13.6965L11.4223 13.7081L4.79626 15.4836C6.0913 18.1567 8.83039 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C11.8032 4 11.6081 4.00711 11.4148 4.02107Z"
        fill="#222222"
      />
      <path
        d="M9.92945 4.27259C9.67849 3.33602 9.55302 2.86773 9.12083 2.67286C8.68865 2.47799 8.30723 2.66782 7.54439 3.04748C6.97028 3.33321 6.42361 3.67419 5.91239 4.06647C4.87054 4.8659 3.99636 5.86272 3.33975 7C2.68314 8.13728 2.25696 9.39275 2.08555 10.6947C2.00144 11.3336 1.97948 11.9775 2.01909 12.6176C2.07171 13.4681 2.09803 13.8933 2.48288 14.1701C2.86773 14.447 3.33602 14.3215 4.27259 14.0706L10.0681 12.5176C10.9788 12.2736 11.4342 12.1516 11.6413 11.7929C11.8484 11.4342 11.7264 10.9788 11.4824 10.0681L9.92945 4.27259Z"
        fill="#222222"
      />
    </svg>
  );
}

export function Star_Icon({
  w = 23,
  color = "#fff",
  active = false,
}: {
  w?: number;
  color?: string;
  active?: boolean;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 10L20 12L14 14L12 20L10 14L4 12L10 10L12 4L14 10Z"
        stroke={active ? "rgb(229, 229, 91)" : color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Add_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" transform="translate(1 1)" fill="none" />
      <path
        d="M6.02201 8.14351C3.70939 11.4581 4.03184 16.0528 6.98938 19.0104C10.3088 22.3298 15.6907 22.3298 19.0102 19.0104C22.3297 15.6909 22.3297 10.309 19.0102 6.98956C16.0527 4.03202 11.4579 3.70957 8.14333 6.02219"
        stroke={color}
        strokeLinecap="round"
      />
      <path
        d="M13 9L13 17"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M17 13L9 13"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Close_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" transform="translate(1 1)" fill={color} />
      <path
        d="M17 9L9 17"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9L17 17"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.02201 8.14351C3.70939 11.4581 4.03184 16.0528 6.98938 19.0104C10.3088 22.3298 15.6907 22.3298 19.0102 19.0104C22.3297 15.6909 22.3297 10.309 19.0102 6.98956C16.0527 4.03202 11.4579 3.70957 8.14333 6.02219"
        stroke={color}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Check_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C14.0822 21 16.1 20.278 17.7095 18.9571C19.3191 17.6362 20.4209 15.798 20.8271 13.7558C21.2333 11.7136 20.9188 9.59376 19.9373 7.75743C18.9558 5.9211 17.3679 4.48191 15.4442 3.68508C13.5205 2.88826 11.38 2.78311 9.38744 3.38754C7.3949 3.99197 5.67358 5.26858 4.51677 6.99987C3.35997 8.73115 2.83925 10.81 3.04334 12.8822C3.24743 14.9543 4.1637 16.8916 5.63604 18.364"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 10L12.402 14.3175C11.7465 15.1042 11.4187 15.4976 10.9781 15.5176C10.5375 15.5375 10.1755 15.1755 9.45139 14.4514L8 13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function People_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 23 23"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="9" r="4" fill="#33363F" />
      <circle cx="17" cy="9" r="3" fill="#33363F" />
      <circle cx="7" cy="9" r="3" fill="#33363F" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5683 18H19.8949C20.4865 18 20.9402 17.4901 20.7965 16.9162C20.4282 15.4458 19.4478 13 16.9999 13C16.1138 13 15.42 13.3205 14.8779 13.7991C16.3857 14.7773 17.1653 16.4902 17.5683 18Z"
        fill="#33363F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.1221 13.7991C8.58001 13.3205 7.88621 13 7.00012 13C4.5522 13 3.57178 15.4458 3.20355 16.9162C3.05983 17.4901 3.51348 18 4.1051 18H6.43167C6.83476 16.4902 7.61435 14.7773 9.1221 13.7991Z"
        fill="#33363F"
      />
      <path
        d="M12 14C15.7087 14 16.6665 17.301 16.9139 19.0061C16.9932 19.5526 16.5523 20 16 20H8C7.44772 20 7.00684 19.5526 7.08614 19.0061C7.33351 17.301 8.29134 14 12 14Z"
        fill="#33363F"
      />
    </svg>
  );
}

export function User_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 23 23"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6515 19.4054C20.2043 19.2902 20.5336 18.7117 20.2589 18.2183C19.6533 17.1307 18.6993 16.1749 17.4788 15.4465C15.907 14.5085 13.9812 14 12 14C10.0188 14 8.09292 14.5085 6.52112 15.4465C5.30069 16.1749 4.34666 17.1307 3.74108 18.2183C3.46638 18.7117 3.79562 19.2902 4.34843 19.4054V19.4054C9.39524 20.4572 14.6047 20.4572 19.6515 19.4054V19.4054Z"
        fill={color}
      />
      <circle cx="12" cy="8" r="5" fill={color} />
    </svg>
  );
}

export function Sound_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 23 23"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 14H8.81763C7.20089 14 5.83017 15.1888 5.60153 16.7893V16.7893C5.29858 18.9099 7.09499 20.7381 9.22059 20.4724L9.77821 20.4027C11.6188 20.1727 13 18.608 13 16.7531V7.38851C13 5.77017 13 4.961 13.474 4.4015C13.9479 3.84201 14.7461 3.70899 16.3424 3.44293L18.6991 3.05015C18.8349 3.02751 18.9028 3.01619 18.9395 3.05588C18.9761 3.09557 18.9594 3.16236 18.926 3.29593L18.0307 6.87721C18.0158 6.93689 18.0083 6.96672 17.9873 6.98673C17.9664 7.00673 17.9362 7.01276 17.8759 7.02482L13 8"
        stroke="#222222"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Playlist_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 23 23"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1056 3.44721L5.78885 6.10557C5.00831 6.49585 4.61803 6.69098 4.61803 7C4.61803 7.30902 5.00831 7.50415 5.78885 7.89443L11.1056 10.5528C11.5445 10.7722 11.7639 10.882 12 10.882C12.2361 10.882 12.4555 10.7722 12.8944 10.5528L18.2111 7.89443C18.9917 7.50415 19.382 7.30902 19.382 7C19.382 6.69098 18.9917 6.49585 18.2111 6.10557L12.8944 3.44721C12.4555 3.22776 12.2361 3.11803 12 3.11803C11.7639 3.11803 11.5445 3.22776 11.1056 3.44721Z"
        fill="#222222"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.02217 10.4893C7.62603 10.8135 8.33716 11.169 9.15554 11.5782L10.2113 12.1061C11.0891 12.545 11.528 12.7644 12.0001 12.7644C12.4723 12.7644 12.9112 12.545 13.789 12.1061L14.8447 11.5782C15.6631 11.169 16.3742 10.8135 16.9781 10.4893L18.2113 11.1059C18.9918 11.4961 19.3821 11.6913 19.3821 12.0003C19.3821 12.3093 18.9918 12.5044 18.2113 12.8947L12.8946 15.5531C12.4557 15.7725 12.2362 15.8822 12.0001 15.8822C11.7641 15.8822 11.5446 15.7725 11.1057 15.5531L11.1057 15.5531L5.78898 12.8947C5.00844 12.5044 4.61816 12.3093 4.61816 12.0003C4.61816 11.6913 5.00844 11.4961 5.78898 11.1059L7.02217 10.4893Z"
        fill="#222222"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.02169 15.4893C7.62567 15.8135 8.33696 16.1692 9.15557 16.5785L10.2113 17.1063C11.0891 17.5452 11.528 17.7647 12.0001 17.7647C12.4723 17.7647 12.9112 17.5452 13.789 17.1063L14.8447 16.5785C15.6633 16.1692 16.3746 15.8135 16.9786 15.4893L18.2113 16.1056C18.9918 16.4959 19.3821 16.691 19.3821 17C19.3821 17.3091 18.9918 17.5042 18.2113 17.8945L12.8946 20.5528C12.4557 20.7723 12.2362 20.882 12.0001 20.882C11.7641 20.882 11.5446 20.7723 11.1057 20.5528L11.1057 20.5528L5.78898 17.8945C5.00844 17.5042 4.61816 17.3091 4.61816 17C4.61816 16.691 5.00844 16.4959 5.78898 16.1056L7.02169 15.4893Z"
        fill="#222222"
      />
    </svg>
  );
}

export function Admin_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 23 23"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.7022 5.78441L12.7878 3.24968C12.2847 3.03406 11.7153 3.03406 11.2122 3.24968L5.29778 5.78441C4.47855 6.13551 3.99051 6.98635 4.10106 7.87077L4.71405 12.7747C4.9342 14.5359 5.81517 16.1477 7.1787 17.284L10.7196 20.2347C11.4613 20.8528 12.5387 20.8528 13.2804 20.2347L16.8213 17.284C18.1848 16.1477 19.0658 14.5359 19.286 12.7747L19.8989 7.87077C20.0095 6.98635 19.5215 6.13551 18.7022 5.78441Z"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 12L11.5687 14.5687C11.7918 14.7918 12.1633 14.7551 12.3383 14.4925L16 9"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Role_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 23 23"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 8L11 16" stroke="#33363F" strokeLinecap="round" />
      <path
        d="M17.7224 20.5C19.2145 17.9157 20 14.9841 20 12C20 9.01588 19.2145 6.08433 17.7224 3.5"
        stroke="#33363F"
        strokeLinecap="round"
      />
      <path
        d="M14.3923 18C15.4455 16.1758 16 14.1064 16 12C16 9.89356 15.4455 7.82423 14.3923 6"
        stroke="#33363F"
        strokeLinecap="round"
      />
      <path
        d="M10.9282 16C11.6303 14.7838 12 13.4043 12 12C12 10.5957 11.6303 9.21615 10.9282 8"
        stroke="#33363F"
        strokeLinecap="round"
      />
      <path
        d="M6.0718 16C5.36965 14.7838 5 13.4043 5 12C5 10.5957 5.36965 9.21615 6.0718 8"
        stroke="#33363F"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Category_Icon({
  w = 23,
  color = "#fff",
}: {
  w?: number;
  color?: string;
}) {
  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 23 23"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="13"
        width="4"
        height="4"
        rx="2"
        transform="rotate(90 6 13)"
        stroke="#33363F"
        strokeWidth="2"
      />
      <rect
        x="17"
        y="12"
        width="4"
        height="4"
        rx="2"
        transform="rotate(-90 17 12)"
        stroke="#33363F"
        strokeWidth="2"
      />
      <path
        d="M18 11L16.5 12.5C15.4829 13.5171 14.9744 14.0256 14.3628 14.1384C14.1229 14.1826 13.8771 14.1826 13.6372 14.1384C13.0256 14.0256 12.5171 13.5171 11.5 12.5V12.5C10.4829 11.4829 9.97442 10.9744 9.36277 10.8616C9.12295 10.8174 8.87705 10.8174 8.63723 10.8616C8.02558 10.9744 7.51705 11.4829 6.5 12.5L5 14"
        stroke="#33363F"
        strokeWidth="2"
      />
    </svg>
  );
}
