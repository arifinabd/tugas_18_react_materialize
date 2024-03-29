import React from "react";
import {
  Button,
  Caption,
  Card,
  CardTitle,
  Col,
  Icon,
  Pagination,
  Row,
  SideNav,
  SideNavItem,
  Slide,
  Slider,
} from "react-materialize";

function App() {
  return (
    <div>
      <Row>
        <SideNav
          // id="SideNav-37"
          options={{ draggable: true }}
          trigger={<Button node="button" icon={<Icon>menu</Icon>} />}
        >
          <SideNavItem
            userView
            user={{
              background: "https://placeimg.com/640/480/tech",
              email: "abdurrahman.arifin@gmail.com",
              image: "/logo192.png",
              name: "Abdurrahman Arifin",
            }}
          />
          <SideNavItem href="/" icon={<Icon>person_outline</Icon>}>
            Profil Saya
          </SideNavItem>
          <SideNavItem href="/" icon={<Icon>help</Icon>}>
            Hubungi Kami
          </SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Product</SideNavItem>
          <SideNavItem href="/" waves>
            Kesehatan
          </SideNavItem>
          <SideNavItem href="/" waves>
            Komputer & Aksesoris
          </SideNavItem>
          <SideNavItem href="/" waves>
            Gaming
          </SideNavItem>
          <SideNavItem href="/" waves>
            Kamera
          </SideNavItem>
          <SideNavItem href="/" waves>
            Olahraga
          </SideNavItem>
          <SideNavItem href="/" waves>
            Fashion Pria
          </SideNavItem>
          <SideNavItem href="/" waves>
            Fashion Wanita
          </SideNavItem>
        </SideNav>
      </Row>
      <Slider>
        <Slide
          image={
            <img
              src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"
              alt="."
            />
          }
        >
          <Caption placement="center">
            <h3>Pantai</h3>
            <h5>
              Dapatkan Kesempatan Jalan - Jalan Ke Pantai Dengan Membeli Sebuah
              Product
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={
            <img
              alt="."
              src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72"
            />
          }
        >
          <Caption placement="left">
            <h3>Paris</h3>
            <h5>
              Dapatkan Kesempatan Jalan - Jalan Ke Paris Dengan Membeli Sebuah
              Product
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={
            <img src="https://materializecss.com/images/sample-1.jpg" alt="." />
          }
        >
          <Caption placement="right">
            <h3>Danau Toba</h3>
            <h5>
              Dapatkan Kesempatan Jalan - Jalan Ke Sumatera Dengan Membeli
              Sebuah Product
            </h5>
          </Caption>
        </Slide>
      </Slider>
      <h5>Hot List</h5>
      <Row>
        <Col m={3} s={6}>
          <Card
            className="small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">
                Audio
              </CardTitle>
            }
          >
            Audio Technica - Mulai Dari{" "}
            <span style={{ backgroundColor: "#c94418" }}>Rp 910 rb</span>
          </Card>
        </Col>
        <Col m={3} s={6}>
          <Card
            className="small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">
                Hanphone
              </CardTitle>
            }
          >
            Handphone Samsung - Mulai Dari{" "}
            <span style={{ backgroundColor: "#c94418" }}>Rp 200 rb</span>
          </Card>
        </Col>
        <Col m={3} s={6}>
          <Card
            className="small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">
                Squishy
              </CardTitle>
            }
          >
            Squishy - Mulai Dari{" "}
            <span style={{ backgroundColor: "#c94418" }}>Rp 55 rb</span>
          </Card>
        </Col>
        <Col m={3} s={6}>
          <Card
            className="small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">
                Koleksi The Avanger
              </CardTitle>
            }
          >
            Koleksi The Avanger - Mulai Dari{" "}
            <span style={{ backgroundColor: "#c94418" }}>Rp 10 rb</span>
          </Card>
        </Col>
      </Row>
      <Pagination
        items={10}
        leftBtn={<Icon>chevron_left</Icon>}
        rightBtn={<Icon>chevron_right</Icon>}
        maxButtons={8}
        activePage={2}
      />
    </div>
  );
}

export default App;
