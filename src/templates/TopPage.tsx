import React, { useEffect,useState }  from 'react'
import { useDispatch,useSelector } from "react-redux";
import { PostCard} from "components/PostProduct";
import { db } from "../firebase";
import { openOutsideLink } from "functions/function";
import { listenAuthState } from "reducks/users/operations";
import { PrimaryButton,ConfirmModal} from "../components/UI";
import { Footer } from "components/Footer/index";
import { POST } from "../types/posts";
import { push } from "connected-react-router";
import { ImageFlex,MaxSectionWrapper, ScrollItem, MainTitle,GridList,Text,Container,MinText,NumberTitle,UnderLineText} from "assets/GlobalLayoutStyle"
import { dialogOpenAction } from "reducks/dialog/dialogSlice";
import {getIsSignedIn} from "reducks/users/userSlice"
import { Max, MaxImage, TopImageWrapper, Flex } from "./style";



const TopPage: React.FC = (props: any) => {
  const dispatch = useDispatch()
  const [postsList, setPostsList] = useState<POST[]>([])
  const postsRef = db.collection("posts");
  const isSignedIn = useSelector(getIsSignedIn)
  useEffect(() => {
    const unSub = postsRef.orderBy("updated_at", "desc").limit(12).onSnapshot((snapshots) => {
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
  }, []);


  useEffect(() => {
    // if (isSignedIn) {
      dispatch(listenAuthState(true))
    // }
  }, []);



  return (
    <div>
      <MaxSectionWrapper>
        <Container width={"100%"}>
          <div>
          <MainTitle>世界に一つだけの風鈴をつくろう！</MainTitle>
            <Text>体験で作った江戸風鈴を投稿して風鈴のお祭りを開こう！</Text>
            <PrimaryButton onClick={()=>dispatch(dialogOpenAction({title:"ログイン",type:"signin"}))} label="ログイン" /> <PrimaryButton onClick={()=>dispatch(dialogOpenAction({title:"アカウントの登録",type:"signup"}))}label="アカウントを登録"/>
          </div>
        </Container>
        <Max>
          <Container width={"850"} color={"#FAF0E6"}>
            <MainTitle sub>風鈴メイカーで風鈴をオシャレに！</MainTitle>
            <TopImageWrapper width={"350"} src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fwindbellmaker.jpg?alt=media&token=dd5d25ac-d135-45af-9f17-3ea81e4c624e"/>
            <Text>製作した作品を簡単な操作で切り抜いて短冊をオリジナルのデザインに編集できます。更に短冊に応援やお願い事などを描くことも出来ます。</Text>
            </Container>
        </Max>
        <Max>
          <Container width={"850"} color={"#FAF0E6"}>
            <MainTitle sub>風鈴のお祭りを開催しよう！</MainTitle>
            <TopImageWrapper width={"700"}src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Ffestival.jpg?alt=media&token=1f640119-c710-452a-b66f-31415def02b4"/>
            <Text>たくさん並んだ風鈴は見る人に元気を与えてくれます。皆様の作品が一つ一つが集まる事でこれまで見たこともない風鈴の世界が広がることを願ってます。</Text>
            </Container>
        </Max>
        <Max>

          <Container width={"850"} color={"#FAF0E6"}>
            <MainTitle sub>描き方がわからなくても大丈夫！</MainTitle>
            <ImageFlex>
            <TopImageWrapper width={"270"} src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fkingyo_lesson.jpg?alt=media&token=7c0c7f37-e342-41ff-8820-1723cd0330d1" />
            <TopImageWrapper width={"270"} src="https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fcolor_description.jpg?alt=media&token=4db2d6cc-9bbe-4542-adab-4a2de5983d1c" />
            </ImageFlex>
            <Text>絵のレッスンをスライド形式で受講できます。風鈴に絵を描くときのコツ、注意点、また色の作り方や柄別の配色も掲載しております。</Text>
            </Container>
        </Max>
        <Max color={"white"}>

          <div className="module-spacer--xl" />

          <MainTitle sub>新しい作品</MainTitle>

          <div className="module-spacer--xl" />

          <GridList change={true}>
            {postsList.length > 0 ?
              postsList.map((post) => (
              <ScrollItem  key={post.id}>
                <PostCard
                    change={true}
                    post={post}

                    name={post.name}
                    images={post.images}
                    allImages={post.allImages}
                    id={post.id}
                    description={post.description}
                    username={post.username}
                    avatar={post.avatar}
                    uid={post.uid}
                />
              </ScrollItem>
          ))
          :
          // ローディング中の表示
          <div style={{
            height: "100vh",
            backgroundColor:"#F5F5F5"
          }}></div>
          }
          </GridList>

          <div className="module-spacer--small" />

        <PrimaryButton
        label="もっと作品を見てみる"
        onClick={()=>dispatch(push("/timeline"))}
          />
            <div className="module-spacer--xl"/>
        </Max>
        <Max>
          <MaxImage img={"https://firebasestorage.googleapis.com/v0/b/fuurin-paint-workshop.appspot.com/o/sozai%2Fapp_lp_second.jpg?alt=media&token=cb762323-7a1a-4dd6-8472-9b909cd55908"} >

            <Container  width={"900"}>
                <MainTitle white sub>サービスを立ち上げた経緯</MainTitle>



                <Text white shadow left>はじめまして、篠原まるよし風鈴では伝統工芸である江戸風鈴を製作しております。新型コロナウイルスの拡大が一年以上も続いており、社会のあり方はもちろん、私たちのお店を取り巻く状況も全く変わってしまいました。<br /><br/><br/>
                  毎年修学旅行などで私たちのお店に訪れる学生達、国内、海外からの団体のお客様達がお店に来て体験できなくなったこと、毎年開かれていた川崎大師さんや氷川神社さんの風鈴市も中止、規模縮小などにより当店も大変な影響を受けております。<br /><br />
                    しかしまだまだ収束が見通せないこの大変厳しい状況の中でも、<br /><br />
                    <UnderLineText>「風鈴の体験を多くの人々に楽しんでもらいたい」</UnderLineText><br /><br />という想いからこのようなサービスを一から勉強して立ち上げました。<br /><br /><br />
                  このサービスでは日本の伝統工芸でもある江戸風鈴の体験を楽しめるような工夫が施されております。お客様の気持ち籠った作品一つ一つ集まる事で世の中に良い影響を与えてくれる事を願っております。<br /><br />
                </Text>
            </Container>
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

              <MinText left>体験キットを購入する、または当店に絵付け体験に来て頂き風鈴に絵を描きます。</MinText>
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
            <MainTitle sub>体験キットのご購入はこちら!</MainTitle>
            <TopImageWrapper width={"300"} src="https://firebasestorage.googleapis.com/v0/b/instagram-react-a7035.appspot.com/o/sozai%2Ftaiken_kit_contents.jpg?alt=media&token=dd683b38-f182-4e9e-9b20-affcaa163559" />
            <Text>体験キットは<UnderLineText>筆、絵の具、江戸風鈴が全てセット</UnderLineText>になっているので、後は水の入った筆洗いを用意するだけですぐに風鈴の絵付けを開始する事ができます。</Text>

            <div className="module-spacer--small" />

            <PrimaryButton
              label="体験キットを購入する"
              onClick={()=>openOutsideLink("https://maruyosi.theshop.jp/")}
              />
          </Container>
        </Max>
        <Max>
          <Container width={"850"}>
            <MainTitle sub>いますぐ作ろう！</MainTitle>
            <Text>当サービスは無料でご利用できます！体験を始める前に登録して他の方達の作品を参考にしたり、絵の描き方を覚えてからでも始められます。</Text>
            <MinText red>※投稿できる風鈴は「江戸風鈴」のみとなります。江戸風鈴は日本で二件しか製作しておりません。</MinText>
              <div className="module-spacer--small"/>
              <PrimaryButton onClick={()=>dispatch(dialogOpenAction({title:"アカウントの登録",type:"signup"}))}label="アカウントを登録"/>
          </Container>
        </Max>
        <ConfirmModal/>
      </MaxSectionWrapper>
      <Footer/>
      </div>
  );
};

export default TopPage;
