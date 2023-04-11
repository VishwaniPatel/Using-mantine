import { IconStar } from "@tabler/icons-react";
import { Group, createStyles, rem, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.teal[9],
    // maxWidth: rem(400),
    // width: "100%",
    // height: rem(30),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: rem(2),
    // marginLeft: "auto",
    // marginRight: "auto",
    borderRadius: theme.radius.sm,
  },
}));
function Rating() {
  const { classes } = useStyles();
  return (
    <Group spacing={5} className={classes.wrapper}>
      <IconStar size="12px" color="red" />
      {/* <p>3.5</p> */}
      <Text>3.5</Text>
    </Group>
  );
}

export default Rating;
