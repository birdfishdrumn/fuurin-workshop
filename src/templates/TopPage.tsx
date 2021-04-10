import React, { useEffect,useState,useCallback }  from 'react'
import { useDispatch, useSelector } from "react-redux";
// import ProductEdit from "./ProductEdit";
import styles from "./module.css/PostList.module.css";
import { PostCard,CarouselItem} from "components/PostProduct";
// import { fetchPosts } from "../reducks/posts/operations";

import { FirebaseTimestamp, db } from "../firebase";
import {openOutsideLink} from "functions/function"
import { getRoute, getIsSignedIn } from "../reducks/users/userSlice"
import { PrimaryButton,ConfirmModal} from "../components/UI";
import {Footer} from "components/Footer/index"
import firebase from "firebase/app"
import { POST } from "../types/posts"
import {push} from "connected-react-router"
import { OrderByDirection } from '@firebase/firestore-types'
import styled from "styled-components"
import DialogTest from "components/UI/Dialog/GlobalDialog";
import { ScrollFlex,MaxSectionWrapper, TwoColumn, MainTitle,GridList,Text,Container,Title,MinText,ScrollMixin,NumberTitle} from "assets/GlobalLayoutStyle"
import { dialogOpenAction } from "reducks/dialog/dialogSlice";


const Max = styled.div`
margin:0 -200% !important;
padding:0 200% !important;
/* background: linear-gradient(#ffffff 0%, #ff6666 100%);
 */
background:${props => props.color};
text-align: center;
margin:100px 0;
`

const MaxImage = styled(Max)`
  background-image: url(${props => props.img});
/* background-repeat: no-repeat; */
background-size:contain;

`

const TopImageWrapper = styled.img`
max-width:${props=>(props.width)}px !important;
width:100%;
margin:30px auto;
object-fit:cover;
border-radius:${props => (props.circle ? "50%" : "10px")};
@media(max-width:768px){

}
`

const Flex = styled.div`
display:flex;
justify-content:space-between;
${ScrollMixin};
>div{
  width:350px !important;
  padding:20px;
  background:#eee;
  margin:5px;
  >p{
      width:280px;
      margin:0 auto;
      /* padding:10px; */
  }

}
@media(max-width:768px){
   >div{
     width:300px !important;
       >p{
      width:260px;
      margin:0 auto;
      /* padding:10px; */
  }
   }
}

`






const TopPage: React.FC = (props: any) => {


  const dispatch = useDispatch()
const selector: any = useSelector(getRoute);
  const [postsList, setPostsList] = useState<POST[]>([])
  const [order,setOrder] = useState<OrderByDirection>("desc")
  const [open, setOpen] = useState<boolean>(false)
  const [sign,setSign] = useState<boolean>(false)

  const isSignedIn = useSelector(getIsSignedIn);
  console.log(isSignedIn)
const postsRef = db.collection("posts")

    const query =decodeURI(selector.location.search)
    //  props.history.push("/");

  useEffect(() => {
    const unSub = postsRef.orderBy("updated_at", order).limit(12).onSnapshot((snapshots) => {
            const postList: any = []
        snapshots.forEach(snapshot => {
          const post = snapshot.data();
          postList.push(post)

        })
        setPostsList(postList)
   })

     return () => {
      unSub()
    }
  }, [])


    const handleClose = useCallback(() => {
     setOpen(false)

    }, [setOpen])

  useEffect(() => {
    if (isSignedIn === true) {
        dispatch(push("/"))
    }

  }, [isSignedIn])



  return (
    <div>
      <MaxSectionWrapper>
         <Container width={"1024"}>
        <TwoColumn>
         <div>
              <MainTitle>世界に一つだけの風鈴を投稿しよう！</MainTitle>
              <Text>体験で作った江戸風鈴を、投稿して風鈴のお祭りを開こう！</Text>
        <PrimaryButton onClick={()=>dispatch(dialogOpenAction({title:"ログイン",type:"sign",typeState:false}))} label="ログイン" /> <PrimaryButton onClick={()=>dispatch(dialogOpenAction({title:"アカウントの登録",type:"sign",typeState:true}))}label="アカウントを登録"/>
        </div>

          </TwoColumn>
          </Container>
        <div className="module-spacer--medium"/>

        <Max>
          <Container width={"850"} color={"#FAF0E6"}>
            <MainTitle sub>風鈴メイカーで作品をオシャレに！</MainTitle>

            <TopImageWrapper width={"350"} src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fwindbellmaker.jpg?alt=media&token=dd5d25ac-d135-45af-9f17-3ea81e4c624e"/>
            <Text>作った作品の短冊を自分好みのデザインに編集できます。更に短冊に応援やお願い事などを描くことで、厳しい時代でも前向きになれます。</Text>

            </Container>
        </Max>

        <Max>
          <Container width={"850"} color={"#FAF0E6"}>
            <MainTitle sub>風鈴のお祭りを開催しよう！</MainTitle>
            <TopImageWrapper width={"700"}src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Ffestival.jpg?alt=media&token=1f640119-c710-452a-b66f-31415def02b4"/>
            <Text>作った作品の短冊を自分好みのデザインに編集できます。更に短冊に応援やお願い事などを描くことで、厳しい時代でも前向きになれます。</Text>
            </Container>
        </Max>
         <Max>

          <Container width={"850"} color={"#FAF0E6"}>
            <MainTitle sub>描き方がわからなくて大丈夫！</MainTitle>
            <ScrollFlex>
             <TopImageWrapper width={"270"} src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fkingyo_lesson.jpg?alt=media&token=7c0c7f37-e342-41ff-8820-1723cd0330d1" />
             <TopImageWrapper width={"270"} src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fmixcolor_top.jpg?alt=media&token=86a5b0bb-9745-4435-b3bc-745102786312" />
            </ScrollFlex>


            <Text>絵のレッスンをスライド形式で受講できます。風鈴に絵を描くときのコツ、注意点、また色の作り方も掲載しております。</Text>


            </Container>
        </Max>
          <Max color={"white"}>
             <div className="module-spacer--xl"/>
          <MainTitle sub>新しい作品</MainTitle>
             <div className="module-spacer--xl"/>
          <GridList change={true}>

        {postsList.length > 0 ?
          postsList.map((post) => (
               <li  className={styles.p_grid__scroll_item} key={post.id}>
              <PostCard
                change={true}
              post={post}
              key={post.id}
              name={post.name}
                images={post.images}
                allImages={post.allImages}
              id={post.id}
              description={post.description}
              username={post.username}
              avatar={post.avatar}
              uid={post.uid}
            />
              </li>
          ))
          :
          // ローディング中の表示
          <div style={{
            height: "100vh",
            backgroundColor:"#F5F5F5"
          }}></div>

        }

        </GridList>
          <div className="module-spacer--small"/>
        <PrimaryButton
         label="もっと作品を見てみる"
         onClick={()=>dispatch(push("/"))}
          />
            <div className="module-spacer--xl"/>
        </Max>
        <Max>
        <MaxImage img={"https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Foveray-top.jpg?alt=media&token=d37fd138-6c17-4511-82a4-99eb7c898388"}>
          <div className="module-spacer--xl" />

          <Container width={"800"}>
            <MainTitle white sub>このサービスを立ち上げた経緯</MainTitle>
            <div className="module-spacer--medium"/>
            <Text left white>新型コロナウイルスの拡大が一年以上も続いており、社会のあり方はもちろん、私たちのお店を取り巻く状況も全く変わってしまいました。<br /><br/><br/>
              毎年都外から修学旅行などで私たちのお店に訪れる学生達、国内、海外からの団体のお客様達がお店に来て体験できなくなったこと、また毎年開かれていた川崎大師さんや氷川神社さんの風鈴市も中止、規模縮小などにより当店も大変な影響を受けております。<br /><br /><br/>
              ただ、まだまだ収束が見通せないこの大変厳しい状況の中でも何かできないかと思い、「風鈴の体験をお店に直接来なくても、体験を楽しめて、作品を共有できる事は何かないだろうか」と考え、このようなサービスを一から勉強して立ち上げました。<br /><br/><br/>
              このサービスでは主に日本の伝統工芸でもある江戸風鈴の体験を楽しめるような工夫が施されております。<br /><br />


            </Text>

            </Container>

             <div className="module-spacer--xl"/>
          </MaxImage>
        </Max>
             <Max>

          <Container width={"1224"}>
            <MainTitle sub>ご利用の流れ</MainTitle>
              <div className="module-spacer--medium"/>
            <Flex>
              <div>
                <NumberTitle content={"1"}>体験する</NumberTitle>
                  <TopImageWrapper circle width={"220"} src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Ftaiken_kit_contents.jpg?alt=media&token=dd683b38-f182-4e9e-9b20-affcaa163559" />

              <MinText left>体験キットを購入、または当店に体験に絵付け体験に来て頂き風鈴に絵を描いて頂きます。お店の場合はもちろん、オンライン上でも絵の描き方や色の作り方が載っているのでやり切ることができます。</MinText>
              </div>
              <div>
                 <NumberTitle content ={"2"}>写真をとる</NumberTitle>
                   <TopImageWrapper circle width={"220"} src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2F4450716_s.jpg?alt=media&token=e04db5fb-928c-4a6e-a01a-7df41c9e68f0" />
              <MinText left>体験を終えたら写真を取りましょう。風鈴メイカーを使う時の撮り方なども当サービスで簡単に解説しています。</MinText>
              </div>

              <div>
                 <NumberTitle content={"3"}>投稿する</NumberTitle>
                   <TopImageWrapper circle width={"220"} src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Ftaiken_kit_contents.jpg?alt=media&token=dd683b38-f182-4e9e-9b20-affcaa163559" />

                <MinText left>最後に作品タイトルや自分の思いを書いて投稿しましょう。投稿した作品は様々な作品と一緒に並んで閲覧できます。また管理人が作品にコメントさせていただく事もあります。
                </MinText>
              </div>



            </Flex>

            </Container>
        </Max>
         <Max>

          <Container width={"850"} color={"#FAF0E6"}>
            <MainTitle sub>体験キットのご購入はこちらから</MainTitle>

             <TopImageWrapper width={"300"} src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Ftaiken_kit_contents.jpg?alt=media&token=dd683b38-f182-4e9e-9b20-affcaa163559" />



            <Text>体験キットを購入する</Text>
              <div className="module-spacer--small"/>
        <PrimaryButton
         label="体験キットを購入する"
          onClick={()=>openOutsideLink("https://maruyosi.theshop.jp/")}
          />
            </Container>
        </Max>
                 <Max>

          <Container width={"850"}>
            <MainTitle sub>自分だけの江戸風鈴をいますぐ作ろう！</MainTitle>
            <Text>当サービスは無料でご利用できます！体験を始める前に登録して、他の方達の作品を参考にしたり、絵の描き方を覚えてからも始められます。</Text>
            <MinText red>※投稿できる風鈴は「江戸風鈴」のみとなります</MinText>
              <div className="module-spacer--small"/>
       <PrimaryButton onClick={()=>dispatch(dialogOpenAction({title:"アカウントの登録",type:"sign",typeState:true}))}label="アカウントを登録"/>
            </Container>
        </Max>


        <ConfirmModal/>
      </MaxSectionWrapper>

      <Footer/>
      </div>
  );
};

export default TopPage;
