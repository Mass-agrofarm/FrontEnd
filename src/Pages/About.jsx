import Divider from "../Components/Divider";
import { FlexDiv } from "../Components/StyledComponents/StyledContainers";


function About () {
  return (
    <>
      {/* hero */}
      <FlexDiv style={{ justifyContent: 'center', marginBottom: '0', backgroundColor: 'whitesmoke', color: '#213547' }}>
        <h1>About Us</h1>
      </FlexDiv>

      {/* Storyline */}
      <section style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'row', gap: '20px', margin: '50px 0px' }}>
        <div>
          <FlexDiv>
            <h2>Who Are We?</h2>
          </FlexDiv>
          <FlexDiv style={{ flexDirection: 'column' , width: '500px'}}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero animi ducimus ipsam iste ad deserunt voluptate reiciendis est deleniti repellat temporibus ullam amet, atque, rem beatae. Aut aliquam necessitatibus voluptatum.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero animi ducimus ipsam iste ad deserunt voluptate reiciendis est deleniti repellat temporibus ullam amet, atque, rem beatae. Aut aliquam necessitatibus voluptatum.</p>
          </FlexDiv>
        </div>
        <div>
          <FlexDiv>
            <img style={{ width: '600px', height: '400px', borderRadius: '15px' }} src="https://fakeimg.pl/353x252/c5c5c5/959595?text=Mass+AgroFarm+&font=museo&font_size=24&retina=1"/>
          </FlexDiv>
        </div>
      </section>

      {/* Company Tagline */}
      <span style={{ margin: '50px 0px' }}>
        <FlexDiv style={{  width: '100%' ,backgroundColor: 'whitesmoke', color: '#213547', justifyContent: 'center', padding: '8px 0px 6px 0px' }}>
          <p><i>&quot;Tagline&quot;</i></p>
        </FlexDiv>
      </span>

      {/* end storyline */}

      {/* mission & Vision */}
      <section style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'row', gap: '30px', margin: '50px 0px' }}>
          <FlexDiv>
            <img style={{ width: '600px', height: '400px', borderRadius: '15px' }} src="https://fakeimg.pl/353x252/c5c5c5/959595?text=Mass+AgroFarm&font=museo&font_size=24&retina=1"/>
          </FlexDiv>
          <FlexDiv style={{ gap: '30px', alignItems: 'center' }}>
            <div style={{ width: '250px', height: '400px' }}>
              <FlexDiv style={{ justifyContent: 'left', marginBottom: '0' }}>
                <h2>Mission</h2>
              </FlexDiv>
              <FlexDiv style={{ textAlign: 'left', marginTop: '2px' }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit nobis esse in sequi deserunt fuga? Quis odit quo sit magnam minima ratione aperiam voluptate? Illum voluptates eum beatae atque?</p>
              </FlexDiv>
            </div>
            <div style={{ width: '250px', height: '400px' }}>
              <FlexDiv style={{ justifyContent: 'left', marginBottom: '0' }}>
                <h2>vision</h2>
              </FlexDiv>
              <FlexDiv style={{ textAlign: 'left', marginTop: '2px' }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit nobis esse in sequi deserunt fuga? Quis odit quo sit magnam minima ratione aperiam voluptate? Illum voluptates eum beatae atque?</p>
              </FlexDiv>
            </div>
          </FlexDiv>
      </section>
      {/* end mission & vision */}
        
        {/* Divider */}
      <Divider style={{ margin: '50px 0px'}}/>
      
      {/* FAQ */}
      <section style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'row', gap: '50px', margin: '50px 0px 60px 0px' }}>
        <div>

          <FlexDiv style={{ marginBottom: '0' }}>
            <h2>Why Choose Us?</h2>
          </FlexDiv>

          <FlexDiv style={{ width: '650px', marginTop: '0'}}>
            <ol>
              <li><strong>Expertise:</strong> Our team has decades of experience in the agriculture industry and can provide valuable insights and advice to help you succeed.</li>

              <li><strong>Quality:</strong> We offer only the highest-quality tractors and farming equipment from top brands, ensuring long-lasting durability and reliability.</li>

              <li><strong>Customer Service:</strong> We are committed to delivering exceptional customer service, with fast response times and personalized support.</li>

              <li><strong>Value:</strong> We offer competitive prices and flexible financing options, allowing you to get the equipment you need without breaking the bank.</li>

              <li><strong>Innovation:</strong> We are constantly seeking out new and innovative products and technologies to help you maximize your productivity and profitability.</li>

              <li><strong>Sustainability:</strong> We are dedicated to promoting sustainable farming practices and offer eco-friendly solutions that minimize environmental impact.</li>

              <li><strong>Partnership:</strong> We believe in building long-term partnerships with our customers, based on trust, transparency and mutual respect.</li>
            </ol>
          </FlexDiv>
        </div>

        <div style={{ alignContent: 'center', alignItems: 'center' }}>
          <FlexDiv>
            <img style={{ width: '400px', height: '250px', borderRadius: '15px' }} src="https://fakeimg.pl/353x252/c5c5c5/959595?text=Mass+AgroFarm&font=museo&font_size=24&retina=1"/>
          </FlexDiv>
        </div>

      </section>
      {/* end FAQ */}
    </>
  )
}

export default About
