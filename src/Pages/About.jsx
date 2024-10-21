import Divider from "@components/Divider";
import { FlexDiv } from "@components/StyledComponents/StyledContainers";
import { P } from "@components/StyledComponents/StyledElements";

// Custom components to About page.
import { Header, StoryLineSection, TagLine, EthosSection, FaqSection } from "@/Components/About/StyledComponents";

// assets.
import mamaMboga from "@assets/mama-mboga.jpg";


function About () {
  return (
    <>
      {/* hero */}
      <Header>
        <h1>About Us</h1>
      </Header>

      {/* Storyline */}
      <StoryLineSection>
        <div className="story-container">
          <div>
            <h2>Who Are We?</h2>
          </div>
          <div className="about-text">
            <P>At Mars Agrofarm & Supplies Ltd, we are change makers with a clear mission: to empower small-scale farmers and informal traders across East Africa through innovative, accessible solutions. We design advanced, affordable agricultural equipment that drives efficiency and boosts productivity for farmers, helping them thrive.
            </P>

            <P>But our vision goes beyond agriculture. Our solar-powered kiosks provide mama mbogas with more than just a place to work—they offer a safe, dignified environment that protects against gender-based violence (GBV) while fostering economic independence.
            </P>
            
            <P>We are driven by a deep commitment to sustainable growth, community empowerment, and creating tangible, long-lasting impact. With every solution we offer, we aim to transform lives, strengthen communities, and pave the way for a better future.</P>
          </div>
        </div>
        <div className="about-image">
            <img src={mamaMboga}/>
        </div>
      </StoryLineSection>

      {/* Company Tagline */}
      <TagLine>
        <div>
          <P><i>&quot;Empowering Agriculture, Enriching Lives.&quot;</i></P>
        </div>
      </TagLine>

      {/* end storyline */}

      {/* mission & Vision */}
      <EthosSection>
          <div className="ethos-image">
            <img src={mamaMboga}/>
          </div>
          <div className="ethos-container">
            <div className="ethos">
              <div>
                <h2>Mission</h2>
              </div>
              <div className="ethos-text">
                <P>Our mission is to empower small-scale farmers and informal traders with innovative, affordable solutions that enhance productivity and promote sustainability. We strive to create safer, dignified workspaces for mama mbogas and foster community growth through transformative, high-quality technologies.</P>
              </div>
            </div>
            <div className="ethos">
              <div>
                <h2>vision</h2>
              </div>
              <div className="ethos-text">
                <P>To revolutionize agriculture and informal trade in East Africa by providing innovative, sustainable solutions that empower communities and promote economic and social transformation.</P>
              </div>
            </div>
          </div>
      </EthosSection>
      {/* end mission & vision */}
        
        {/* Divider */}
      <Divider style={{ margin: '50px 0px'}}/>
      
      {/* FAQ */}
      <FaqSection>
        <div className="faq-container">

          <div>
            <h2>Why Choose Us?</h2>
          </div>

          <FlexDiv className="faq-solutions">
            <ol>
              <li><strong>Expertise:</strong> Our team has decades of experience in the agriculture industry and can provide valuable insights and advice to help you succeed.</li>

              <li><strong>Quality:</strong> We offer only the highest-quality walking tractors and farming equipment from top brands, ensuring long-lasting durability and reliability.</li>

              <li><strong>Customer Service:</strong> We are committed to delivering exceptional customer service, with fast response times and personalized support.</li>

              <li><strong>Value:</strong> We offer competitive prices and flexible financing options, allowing you to get the equipment you need without breaking the bank.</li>

              <li><strong>Innovation:</strong> We are constantly seeking out new and innovative products and technologies to help you maximize your productivity and profitability.</li>

              <li><strong>Sustainability:</strong> We are dedicated to promoting sustainable farming practices and offer eco-friendly solutions that minimize environmental impact.</li>

              <li><strong>Partnership:</strong> We believe in building long-term partnerships with our customers, based on trust, transparency and mutual respect.</li>
            </ol>
          </FlexDiv>
        </div>

        <div className="faq-img">
          <FlexDiv>
            <img src="https://fakeimg.pl/353x252/c5c5c5/959595?text=Mars+AgroFarm&font=museo&font_size=24&retina=1"/>
          </FlexDiv>
        </div>

      </FaqSection>
      {/* end FAQ */}
    </>
  )
}

export default About
