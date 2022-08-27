import {
  Icon,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode;
  titulo: string;
  barraDeFerramentas: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  titulo,
  barraDeFerramentas,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        gap={1}
        padding={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        display="flex"
        alignItems="center"
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="elipses"
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
        >
          {titulo}
        </Typography>
      </Box>

      {barraDeFerramentas && <Box>{barraDeFerramentas}</Box>}
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};