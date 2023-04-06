import { Button } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useState } from "react";
const Buttons = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
  };
  return (
    <div className="App">
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </div>
  );
};
export default Buttons;
