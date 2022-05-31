import styled from "styled-components";
import Career1 from "../../static/image/career1.png";
import Career2 from "../../static/image/career2.jpg";
import Career3 from "../../static/image/career3.jpg";
import Career4 from "../../static/image/career4.jpg";
import Career5 from "../../static/image/career5.png";
import Career6 from "../../static/image/career6.png";
import Career7 from "../../static/image/career7.png";
import Career8 from "../../static/image/career8.jpg";
import Career9 from "../../static/image/career9.png";
import Career10 from "../../static/image/career10.jpg";
import Career11 from "../../static/image/career11.jpg";
import Career12 from "../../static/image/career12.jpg";
import Career13 from "../../static/image/career13.png";
import Career14 from "../../static/image/career14.png";
import Career15 from "../../static/image/career15.png";
import Career16 from "../../static/image/career16.png";
import Career17 from "../../static/image/career17.jpg";
import Career20 from "../../static/image/career20.jpg";
import { ReactComponent as DownView } from "../../icons/downview.svg";

function Card({ card }) {
  return (
    <CardTool>
      <CardBoxTool>
        <CardImg src={card.img} />
        <TextBoxOne>
          <Title>{card.title}</Title>
          <Content>{card.content}</Content>
        </TextBoxOne>

        <TextBoxTwo>
          <Button>
            <Img src={Career5} />
          </Button>
          <ButtonText>{card.buttontext}</ButtonText>
        </TextBoxTwo>
      </CardBoxTool>
    </CardTool>
  );
}

const CardBox = () => {
  const cards = [
    {
      id: 1,
      img: Career1,
      title: "직장 내 괴롭힘에 해당할까?",
      content:
        "사실관계 A와 B는 C가 자신들이 근무하는 회계팀에 전입한 이후에, 회계팀 직원들이 듣는 가운데 ...",
      buttontext: "법무법인 미션",
    },
    {
      id: 2,
      img: Career2,
      title: "젊은 꼰대가 온다",
      content:
        "꼰대가 되지 않으려 나름대로의 노력을 하고 있습니다. 직원들이 말할 때는 말을 끊지 않고 들어줍..",
      buttontext: "책인사",
    },
    {
      id: 3,
      img: Career3,
      title: "내 연차유급휴가는 얼마나 될까?",
      content:
        "오늘은 직장인들의 유일한(?) 소망이라고 할 수 있는 연차유급휴가(연차휴가)에 관하여 알아보겠...",
      buttontext: "법무법인 미션",
    },
    {
      id: 4,
      img: Career4,
      title: "스타트업 코치 양성과정 9기 후기",
      content:
        "안녕하세요, <스타트업 코치 양성과정> 프로그램을 운영하는 최효석 코치입니다. 지난 2019년 ...",
      buttontext: "최효석",
    },
    {
      id: 5,
      img: Career5,
      title: "[삼삼한] 목표, 사소한 일의 총합",
      content:
        "인생은 일과로 이루어져 있다. 지금 읽고 있는 책 첫 챕터 첫 문장이다.요지는 이렇다.목표를 이 ...",
      buttontext: "한봉규 PHILIP",
    },
    {
      id: 6,
      img: Career6,
      title: "일을 잘하라고 했지,무례해도 된단 얘긴 안했는데.",
      content:
        "사실 일을 잘해서 무례한건지,무례해서 일을 잘하는 건지 선후관계를 파악하긴 어렵습니다. 그 둘...",
      buttontext: "박창선",
    },
    {
      id: 7,
      img: Career7,
      title: "5만 돌파",
      content:
        "보낸사람:소호 받는사람:모빌스 홈오피스 데이 금요일은 맴버들이 낮부터 소호&모춘 홈오피스...",
      buttontext: "소호",
    },
    {
      id: 8,
      img: Career8,
      title: "주니어를 위해서 시니어가 해야할 일, 그리고 주니어에게",
      content:
        "강의를 시작한 것,브런치에 글을 쓰는 것,그리고 계속해서 무언가를 해서 공유하려고 하는 것은 ...",
      buttontext: "도그냥",
    },
    // {
    //   id: 9,
    //   img: Career9,
    //   title: "",
    //   content: "",
    //   buttontext: "",
    // },
    // {
    //   id: 10,
    //   img: Career10,
    //   title: "",
    //   content: "",
    //   buttontext: "",
    // },
    // {
    //   id: 11,
    //   img: Career11,
    //   title: "",
    //   content: "",
    //   buttontext: "",
    // },
    // {
    //   id: 12,
    //   img: Career12,
    //   title: "",
    //   content: "",
    //   buttontext: "",
    // },
    // {
    //   id: 13,
    //   img: Career13,
    //   title: "",
    //   content: "",
    //   buttontext: "",
    // },
    // {
    //   id: 14,
    //   img: Career14,
    //   title: "",
    //   content: "",
    //   buttontext: "",
    // },
    // {
    //   id: 15,
    //   img: Career15,
    //   title: "",
    //   content: "",
    //   buttontext: "",
    // },
    // {
    //   id: 16,
    //   img: Career16,
    //   title: "",
    //   content: "",
    //   buttontext: "",
    // },
    // {
    //   id: 17,
    //   img: Career17,
    //   title: "",
    //   content: "",
    //   buttontext: "",
    // },
    // {
    //   id: 18,
    //   img: Career7,
    //   title: "",
    //   content: "",
    //   buttontext: "",
    // },
    // {
    //   id: 19,
    //   img: Career10,
    //   title: "",
    //   content: "",
    //   buttontext: "",
    // },
    // {
    //   id: 20,
    //   img: Career20,
    //   title: "",
    //   content: "",
    //   buttontext: "",
    // },
  ];

  return (
    <div>
      <CardContainer>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </CardContainer>
      <BtnSection>
        <ViewButton>
          <ViewBtnText>더 많은 콘텐츠 보기</ViewBtnText>
          <DownView width="19px" height="16px" />
        </ViewButton>
      </BtnSection>
    </div>
  );
};

const BtnSection = styled.div`
  width: 345px;
  height: 50px;
  margin: 0 auto;
  margin-top: 60px;
`;
const ViewButton = styled.button`
  width: 345px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 1px solid #e1e2e3;
  // border: 1px solid #36f;
  color: #333;
  border-radius: 50px;
`;
const ViewBtnText = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 700;
`;
const CardContainer = styled.div`
  margin: 0 0 10px 15px;
  max-width: 1060px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const CardTool = styled.div`
  margin-top: 35px;
`;
const CardBoxTool = styled.div`
  width: 250px;
  height: 308px;
`;
const CardImg = styled.img`
  width: 250px;
  height: 175px;
  border-radius: 4px;
  object-fit: cover;
`;
const TextBoxOne = styled.div`
  margin-top: 10px;
`;
const Title = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 700;
`;
const Content = styled.div`
  margin-top: 10px;
  color: #aaa;
  font-size: 13px;
  line-height: 21px;
  font-weight: 600;
`;
const TextBoxTwo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
`;
const ButtonText = styled.div`
  color: #aaa;
  font-size: 13px;
  font-weight: 600;
  line-height: 19px;
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export default CardBox;
