import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
import routes from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/bg/bg4.png";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
//import PropTypes from "prop-types";

function Presentation() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);
  // ...
  const addPosts = async (name, email, phone, body) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((posts) => [data, ...posts]);
        setName("");
        setEmail("");
        setPhone("");
        setBody("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(name, email, phone, body);
    setSubmitted(true);
    setSubmitted("Form submitted successfully!");
  };
  // const transferValue = (event) => {
  //   event.preventDefault();
  //   const val = {
  //     posts,
  //   };
  //   // if (barcode===null || barcode===""){
  //   //   return false;
  //   // } else if(barcode.length === 10){
  //   //   return val;
  //   // }
  //   PropTypes.func(val);
  //   setPosts("");
  //   // setUpdated('');
  // };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/pages/get-started",
          label: "get started",
          color: "error",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} lg={6} justifyContent="center">
            <MKTypography
              variant="h1"
              color="white"
              mt={10}
              ml={6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Complete Accounting and IT Solutions.
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="left"
              px={{ xs: 6, lg: 12 }}
              mt={5}
            >
              Accounting software that manages your finances, keeps you VAT compliant, automates
              business workflows, and helps you work collectively across departments. A one-stop-hub
              for all your Accounting, ERP, CRM and Payroll.
            </MKTypography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
            md={7}
            lg={6}
            xl={4}
            ml={{ xs: "auto", lg: 6 }}
            mr={{ xs: "auto", lg: 6 }}
          >
            <MKBox
              bgColor="white"
              borderRadius="xl"
              shadow="lg"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              mt={{ xs: 10, sm: 9, md: 10 }}
              mb={{ xs: 10, sm: 9, md: 10 }}
              mx={3}
              minHeight="530px"
              maxHeight="530px"
            >
              <MKBox
                variant="gradient"
                bgColor="error"
                coloredShadow="info"
                borderRadius="lg"
                p={2}
                mx={2}
                mt={-2}
              >
                <MKTypography
                  variant="h4"
                  color="white"
                  ml={3}
                  component="a"
                  href="/"
                  target="_blank"
                >
                  Get started with your free trail
                </MKTypography>
              </MKBox>
              <MKBox p={3}>
                {submitted ? (
                  <div>
                    <MKBox
                      width="100%"
                      component="form"
                      method="post"
                      autoComplete="off"
                      onSubmit={handleSubmit}
                    >
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <MKInput
                            variant="standard"
                            label="Full Name"
                            value={name}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            onChange={(e) => setName(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <MKInput
                            type="email"
                            variant="standard"
                            label="Email"
                            value={email}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <MKInput
                            type="number"
                            variant="standard"
                            label="Mobile No"
                            value={phone}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <MKInput
                            variant="standard"
                            label="What can we help you?"
                            value={body}
                            //placeholder="Describe your problem in at least 250 characters"
                            InputLabelProps={{ shrink: true }}
                            multiline
                            fullWidth
                            rows={4}
                            onChange={(e) => setBody(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                      <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                        <MKButton
                          type="submit"
                          variant="gradient"
                          color="error"
                          fullWidth
                          //onClick={transferValue}
                        >
                          Submit
                        </MKButton>
                      </Grid>
                    </MKBox>
                    <Typography variant="h6" align="center" gutterBottom>
                      Form submitted successfully! Thank You!
                    </Typography>
                    {/* <Typography variant="body1" align="center">
                      Thank you for your enquiry.
                    </Typography> */}
                  </div>
                ) : (
                  <MKBox
                    width="100%"
                    component="form"
                    method="post"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <MKInput
                          variant="standard"
                          label="Full Name"
                          value={name}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <MKInput
                          type="email"
                          variant="standard"
                          label="Email"
                          value={email}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <MKInput
                          type="number"
                          variant="standard"
                          label="Mobile No"
                          value={phone}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <MKInput
                          variant="standard"
                          label="What can we help you?"
                          value={body}
                          //placeholder="Describe your problem in at least 250 characters"
                          InputLabelProps={{ shrink: true }}
                          multiline
                          fullWidth
                          rows={4}
                          onChange={(e) => setBody(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                      <MKButton
                        type="submit"
                        variant="gradient"
                        color="error"
                        fullWidth
                        //onClick={transferValue}
                      >
                        Submit
                      </MKButton>
                    </Grid>
                  </MKBox>
                )}
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Stack className="posts-container" direction="row" spacing={2}>
          {posts.map((post) => {
            return (
              <div className="post-card" key={post.id}>
                <Card sx={{ padding: "5px", minHeight: "150px", maxWidth: "200px" }}>
                  <p className="post-title">UserName: {post.name}</p>
                  <p className="post-title">Email: {post.email}</p>
                  <p className="post-title">Contact: {post.phone}</p>
                  <p className="post-body">Description: {post.body}</p>
                </Card>
              </div>
            );
          })}
        </Stack>
        <Counters />
        <Information />
        <DesignBlocks />
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container sx={{ mt: 6 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Our Vision"
                description="Our objective as an organization is to establish an expanded multinational customer base. We hope to accomplish by providing the utmost quality of products and services in tune with customer expectations. We work in collaboration with the customer by providing cost-effective solutions on time and prosper to exceed customer outlooks"
                action={{
                  type: "external",
                  route: "/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Our Mission"
                description="We believe that providing an excellent quality of service to our customers that endeavor to create a long-lasting relationship through our products and services. Keeping clients ahead of the competition. We work in collaboration with the customer. leverage on technical and managerial capabilities for providing a practical solution to the clients."
                action={{
                  type: "external",
                  route: "/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Our Goal"
                description="Peniel Technology LLC has been conceptualized to serve the accounting needs of a diverse range of businesses and practicing as well. we provide you with a one-stop solution from a compliance and poise to handle your accounting process with absolute ease and ample time to emphasize on other aspects of your business."
                action={{
                  type: "external",
                  route: "/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Download />
        <MKBox pt={14} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
