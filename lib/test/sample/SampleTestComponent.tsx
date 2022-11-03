import { Box } from "@mui/material";

export const SampleTestComponent = () => {
  return (
    <Box sx={{ color: ({ palette }) => palette.primary.main, fontSize: 12 }}>
      샘플
    </Box>
  );
};
