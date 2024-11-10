import { forwardRef } from "react";

type MyVideoPlayerProps = {
  width: string;
  type: string;
  src: string;
};

// MyVideoPlayerコンポーネントの説明:
// 1. forwardRefを使用して、親コンポーネントからrefを受け取れるようにする
//    - <HTMLVideoElement>: videoタグのDOM要素の型を指定
//    - MyVideoPlayerProps: コンポーネントのpropsの型を指定
// 2. コンポーネントの実装:
//    - propsとrefを引数に取る関数コンポーネント
//    - videoタグにrefを渡すことで、親コンポーネントからvideoタグを操作可能に
//    - width, src, typeなどのpropsをvideoタグに渡す
export const MyVideoPlayer = forwardRef<HTMLVideoElement, MyVideoPlayerProps>((props, ref) => {
  return (
    <video width={props.width} ref={ref}>
      <source src={props.src} type={props.type} />
    </video>
  );
});
