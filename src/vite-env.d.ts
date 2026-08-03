declare module "*.svg" { //「.svgで終わるすべてのファイルパスに対して、これから宣言します」という意味。*はワイルドカードで「任意の文字列」を表す
  const content: string; //「そのファイルの中身は、string型のcontentという変数として扱う」という宣言
  export default content; //「そのcontentを、デフォルトエクスポートとして提供する」という意味
}

declare module "*.png" {
  const content: string;
  export default content;
}