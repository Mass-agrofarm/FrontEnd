import Divider from "../Components/Divider"
import { FlexDiv } from "../Components/StyledComponents/StyledContainers"

function About () {
  return (
    <>
      {/* hero */}
      <FlexDiv style={{ justifyContent: 'center' }}>
        <h1>About Page</h1>
      </FlexDiv>

      {/* Storyline */}
      <section className="story-line">
        <div>
          <FlexDiv>
            <h2>Who Are We?</h2>
          </FlexDiv>
          <FlexDiv>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero animi ducimus ipsam iste ad deserunt voluptate reiciendis est deleniti repellat temporibus ullam amet, atque, rem beatae. Aut aliquam necessitatibus voluptatum.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero animi ducimus ipsam iste ad deserunt voluptate reiciendis est deleniti repellat temporibus ullam amet, atque, rem beatae. Aut aliquam necessitatibus voluptatum.</p>
          </FlexDiv>
        </div>
        <div>
          <FlexDiv>
            <img src=""/>
          </FlexDiv>
        </div>
      </section>

      {/* Company Tagline */}
      <span style={{ margin: '0', width: '100%', height: '30px'}}>
        <FlexDiv >
          <p>Tagline</p>
        </FlexDiv>
      </span>

      {/* end storyline */}

      {/* mission & Vision */}
      <section className="mission-vision">
        <FlexDiv>
          <FlexDiv>
            <img src=""/>
          </FlexDiv>
          <FlexDiv>
            <div>
              <FlexDiv>
                <h2>Mission</h2>
              </FlexDiv>
              <FlexDiv>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit nobis esse in sequi deserunt fuga? Quis odit quo sit magnam minima ratione aperiam voluptate? Illum voluptates eum beatae atque?</p>
              </FlexDiv>
            </div>
            <div>
              <FlexDiv>
                <h2>vision</h2>
              </FlexDiv>
              <FlexDiv>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit nobis esse in sequi deserunt fuga? Quis odit quo sit magnam minima ratione aperiam voluptate? Illum voluptates eum beatae atque?</p>
              </FlexDiv>
            </div>
          </FlexDiv>
        </FlexDiv>
      </section>
      {/* end mission & vision */}
        
        {/* Divider */}
      <Divider />
      
      {/* FAQ */}
      <section>
        <div>
          <FlexDiv>
            <h2>FAQ</h2>
          </FlexDiv>
          <FlexDiv>
            <ol>
              <li>Q1</li>
              <li>Q2</li>
              <li>Q3</li>
              <li>Q4</li>
              <li>Q5</li>
            </ol>
          </FlexDiv>
        </div>
        <div>
          <FlexDiv>
            <img src=""/>
          </FlexDiv>
        </div>
      </section>
      {/* end FAQ */}
    </>
  )
}

export default About
