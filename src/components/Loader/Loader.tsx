import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";

interface LoadingProps {
  loading: boolean;
}

const Loader: React.FC<LoadingProps> = ({ loading }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        mt: 4,
      }}
    >
      <ClipLoader loading={loading} size={100} color="#2196f3" />
    </Box>
  );
};

export default Loader;
