interface IDashboardIconProps {
  fill?: string;
}

const DashboardIcon: React.FC<IDashboardIconProps> = ({ fill = "#FEC600" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
    >
      <rect
        opacity="0.01"
        x="0.1875"
        y="0.273438"
        width="26.19"
        height="25.2983"
        fill={fill}
      />
      <path
        d="M10.0089 3.43579H5.64393C4.43856 3.43579 3.46143 4.37966 3.46143 5.54399V9.76038C3.46143 10.9247 4.43856 11.8686 5.64393 11.8686H10.0089C11.2143 11.8686 12.1914 10.9247 12.1914 9.76038V5.54399C12.1914 4.37966 11.2143 3.43579 10.0089 3.43579Z"
        fill={fill}
      />
      <path
        d="M20.921 3.43579H16.556C15.3507 3.43579 14.3735 4.37966 14.3735 5.54399V9.76038C14.3735 10.9247 15.3507 11.8686 16.556 11.8686H20.921C22.1264 11.8686 23.1035 10.9247 23.1035 9.76038V5.54399C23.1035 4.37966 22.1264 3.43579 20.921 3.43579Z"
        fill={fill}
      />
      <path
        d="M10.0089 13.9766H5.64393C4.43856 13.9766 3.46143 14.9204 3.46143 16.0848V20.3011C3.46143 21.4655 4.43856 22.4093 5.64393 22.4093H10.0089C11.2143 22.4093 12.1914 21.4655 12.1914 20.3011V16.0848C12.1914 14.9204 11.2143 13.9766 10.0089 13.9766Z"
        fill={fill}
      />
      <path
        d="M20.921 13.9766H16.556C15.3507 13.9766 14.3735 14.9204 14.3735 16.0848V20.3011C14.3735 21.4655 15.3507 22.4093 16.556 22.4093H20.921C22.1264 22.4093 23.1035 21.4655 23.1035 20.3011V16.0848C23.1035 14.9204 22.1264 13.9766 20.921 13.9766Z"
        fill={fill}
      />
    </svg>
  );
};

export default DashboardIcon;