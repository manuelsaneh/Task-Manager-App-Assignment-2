import { Box, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";

interface TabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ value, onChange }) => {
  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={onChange}
            centered
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Active Tasks" />
            <Tab label="Completed Tasks" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
};

export default Tabs;
