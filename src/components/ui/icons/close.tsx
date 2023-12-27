interface ICloseIconProps {
  width?: string;
  height?: string;
  fill?: string;
}

const CloseIcon: React.FC<ICloseIconProps> = ({
  fill = "#FEC600",
  height = "32",
  width = "32",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M22.4511 8.47476L16.0007 14.9251L9.5504 8.47476L8.47534 9.54982L14.9257 16.0002L8.47534 22.4505L9.5504 23.5256L16.0007 17.0752L22.4511 23.5256L23.5262 22.4505L17.0758 16.0002L23.5262 9.54982L22.4511 8.47476Z"
        fill={fill}
      />
    </svg>
  );
};

export default CloseIcon;
