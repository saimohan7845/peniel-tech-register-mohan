import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";

function BadgesGradient() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={0.5}>
            <MKBadge badgeContent="penieltech" color="primary" container />
            <MKBadge badgeContent="penieltech" color="secondary" container />
            <MKBadge badgeContent="penieltech" color="success" container />
            <MKBadge badgeContent="penieltech" color="error" container />
            <MKBadge badgeContent="penieltech" color="warning" container />
            <MKBadge badgeContent="penieltech" color="info" container />
            <MKBadge badgeContent="penieltech" color="light" container />
            <MKBadge badgeContent="penieltech" color="dark" container />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BadgesGradient;
