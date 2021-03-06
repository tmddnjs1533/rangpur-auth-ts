import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { StyledDialog } from "./styles/PolicyStyles";
import { FilledButton } from "./styles/AppStyles";
const PolicyDialog = ({ name, open, handleClose, onAgreeClick }) => {
  return (
    <>
      <StyledDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="styled"
      >
        <div className="dialog_header">
          <h4>{name} 전문</h4>
          <button type="button" onClick={handleClose} className="btn_close">
            닫기
          </button>
        </div>
        <div className="dialog_content">
          <Scrollbars>
            <div>
              <article>
                1. 용어의 정의 ① “이용자”라 함은 당 시스템에 접속하여 당
                시스템이 제공하는 서비스를 받는 회원 및 비회원을 말합니다. ②
                "회원"이라 함은 서비스를 이용하기 위하여 당 시스템에 개인정보를
                제공하여 아이디(ID)와 비밀번호를 부여 받은 자를 말합니다. ③
                "회원 아이디(ID)"라 함은 회원의 식별 및 서비스 이용을 위하여
                자신이 선정한 문자 및 숫자의 조합을 말합니다. ④
                "비밀번호(패스워드)"라 함은 회원이 자신의 비밀보호를 위하여
                선정한 문자, 숫자, 특수문자의 조합을 말합니다. ⑤ “이용해지”라
                함은 회원이 서비스 이용 이후 그 이용계약을 종료시키는 의사표시를
                말합니다. 2. 약관의 효력 및 변경 ① 이 약관은 당 시스템에
                게시하거나 기타의 방법으로 회원에게 공지함으로써 효력이
                발생합니다. ② 당 시스템는 이 약관을 개정할 경우에 적용일자 및
                개정사유를 명시하여 현행 약관과 함께 초기화면에 그 적용일자 7일
                이전부터 적용일자 전일까지 공지합니다. 다만, 회원에게 불리하게
                약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을
                두고 공지합니다. 이 경우 개정 전 내용과 개정 후 내용을 명확하게
                비교하여 이용자가 알기 쉽도록 표시합니다. 3. 약관 외 준칙 ① 이
                약관은 당 시스템이 제공하는 서비스에 관한 이용안내와 함께
                적용됩니다. ② 이 약관에 명시되지 아니한 사항은 관계법령의 규정이
                적용됩니다. 2장 서비스 이용계약 4. 이용계약의 성립 등 이용계약은
                이용자의 약관내용에 대한 동의와 이용자의 이용신청에 대한 당
                시스템의 승낙으로 성립합니다. 5. 이용신청 이용신청은 서비스의
                회원정보 화면에서 이용자가 당 시스템에서 요구하는 가입신청
                양식에 개인의 신상정보를 기록하는 방식으로 신청합니다. 6.
                이용신청의 승낙 ① 이용신청의 승낙은 당 시스템이 제공하는 영상
                검색, 영상 Preview, 영상제공신청의 이용승낙을 포함합니다. ② 당
                시스템는 다음 각 호에 해당하는 경우에 대하여는 그 신청에 대한
                제한 사유가 해소될 때까지 승낙을 유보 또는 일부 서비스 이용을
                제한할 수 있습니다. 1. 내용이 허위인 것으로 판명되거나,
                그러하다고 의심할만한 합리적인 사유가 발생 할 경우 2. 기타 당
                시스템이 필요하다고 인정되는 경우 7. 계약사항의 변경 회원은
                회원정보관리를 통해 언제든지 자신의 정보를 열람하고 수정할 수
                있습니다. 회원은 이용신청 시 기재한 사항이 변경되었을 때에는
                수정을 하여야 하며, 수정하지 아니하여 발생하는 문제의 책임은
                회원에게 있습니다. 8. 개인정보의 보호 및 사용 당 시스템는
                관계법령이 정하는 바에 따라 회원 등록정보를 포함한 회원의
                개인정보를 보호하기 위해 노력합니다. 회원 개인정보의 보호 및
                사용에 대해서는 관련법령 및 당 시스템의 개인정보 보호정책이
                적용됩니다. 3장 서비스제공 및 이용 9. 서비스 이용 ① 당 시스템는
                회원의 이용신청을 승낙한 때부터 서비스를 개시합니다. 단, 일부
                서비스의 경우에는 지정된 일자부터 서비스를 개시합니다. ②
                서비스의 이용은 업무상 또는 기술상 특별한 지장이 없는 한
                연중무휴, 1일 24시간 운영을 원칙으로 합니다. 단, 시스템
                정기점검, 증설 및 교체를 미리 정한 날이나 시간에 서비스를 일시
                중단할 수 있으며, 예정되어 있는 작업으로 인한 서비스 일시중단은
                당 시스템 홈페이지를 통해 사전에 공지합니다. ③ 회원에 가입한
                후라도 일부 서비스 이용 시 서비스 제공자의 요구에 따라 특정
                회원에게만 서비스를 제공할 수도 있습니다. ④ 당 시스템는 서비스를
                일정범위로 분할하여 각 범위별로 이용가능 시간을 별도로 정할 수
                있습니다. 이 경우 그 내용을 사전에 공지합니다. 10. 서비스의
                변경, 중지 및 정보의 저장과 사용 ① 회원은 본 서비스에 보관되거나
                전송된 메시지 및 기타 통신 메시지 등의 내용이 국가의 비상사태,
                정전, 당 시스템의 관리범위 외의 서비스 설비 장애 및 기타
                불가항력에 의하여 보관되지 못하였거나 삭제된 경우, 전송되지 못한
                경우 및 기타 통신 데이터의 손실에 대해 당 시스템는 아무런 책임을
                지지 않음에 동의합니다. ② 정상적인 서비스 제공의 어려움으로
                인하여 일시적으로 서비스를 중지하여야 할 경우에는 서비스 중지
                최소 3일전에 고지 후 서비스를 중지할 수 있으며, 이 기간동안
                회원이 고지내용을 인지하지 못한데 대하여 당 시스템는 책임을
                부담하지 아니합니다. 상당한 이유가 있을 경우 위 사전 고지기간은
                감축되거나 생략될 수 있습니다. 또한 위 서비스 중지에 의하여 본
                서비스에 보관되거나 전송된 메시지 및 기타 통신 메시지 등의
                내용이 보관되지 못하였거나 삭제된 경우, 전송되지 못한 경우 및
                기타 통신 데이터의 손실이 있을 경우에 대하여도 책임을 부담하지
                아니합니다. ③ 당 시스템의 사정으로 서비스를 영구적으로
                중단하여야 할 경우 제2항을 준용합니다. 다만, 이 경우 사전
                고지기간은 1개월로 합니다. ④ 사전 고지 후 서비스를 일시적으로
                수정, 변경 및 중단할 수 있으며, 이에 대하여 회원 또는 제3자에게
                어떠한 책임도 부담하지 아니합니다. ⑤ 회원이 이 약관의 내용에
                위배되는 행동을 한 경우, 임의로 서비스 사용을 중지할 수
                있습니다. 이 경우 회원의 접속을 금지할 수 있으며, 회원이 게시한
                내용의 전부 또는 일부를 임의로 삭제할 수 있습니다. 11. 정보의
                제공 및 광고의 게재 ① 당 사이트는 회원이 서비스 이용 중 필요가
                있다고 인정되는 다양한 정보 및 광고에 대해서는 전자우편이나
                서신우편, SMS(핸드폰 문자메시지), DM, 메신저 등의 방법으로
                회원에게 제공할 수 있습니다. ② 서비스의 운용과 관련하여
                서비스화면, 홈페이지, 전자우편 등에 광고 등을 게재할 수 있으며,
                서비스를 이용하고자 하는 회원이 이 광고게재에 대하여 동의하는
                것으로 간주합니다. ③ 서비스 상에 게재되어 있거나 서비스를 통한
                광고주와의 판촉활동에 회원이 참여하거나 교신 또는 거래의
                결과로서 발생하는 모든 손실 또는 손해에 대해 책임을 지지
                않습니다. 12. 게시물의 저작권 ① 회원이 서비스 내에 게시한
                게시물의 저작권은 회원에게 있으며, 당 사이트는 다른 서비스에서의
                게재 등에 활용할 수 있습니다. ② 회원의 게시물이 타인의 저작권,
                프로그램 저작권 등을 침해함으로써 발생하는 민, 형사상의 책임은
                전적으로 회원이 부담하여야 합니다. ③ 회원은 서비스를 이용하여
                얻은 정보를 가공, 판매하는 행위 등 서비스에 게재된 자료를
                상업적으로 사용할 수 없습니다. 13. (주)미디어그룹사람과숲
                영상정보의 소유권 ① 당 사이트가 제공하는 서비스, 그에 필요한
                소프트웨어, 이미지, 마크, 로고, 디자인, 서비스명칭, 정보 및 상표
                등과 관련된 지적재산권 및 기타권리는 당 사이트에 소유권이
                있습니다. 다만, 게시물의 원저작자가 별도로 있는 경우 그 출처를
                명시하여 해당 게시물의 저작권은 원저작자에게 있습니다. ② 회원이
                직접 게시한 저작물의 저작권은 회원에게 있습니다. 다만, 회원은 당
                사이트에 무료로 이용할 수 있는 권리를 허락한 것으로 봅니다. ③
                회원은 당 사이트가 명시적으로 승인한 경우를 제외하고는 제1항
                소정의 각 재산에 대한 전부 또는 일부의 수정, 대여, 대출, 판매,
                배포, 제작, 양도, 라이센스, 담보권 설정행위, 상업적 이용행위를
                할 수 없으며, 제3자로 하여금 이와 같은 행위를 하도록 허락할 수
                없습니다. 14. 자료이용 준수사항 ① 당 사이트에서 제공하는 자료의
                사용범위는 ‘인식기술 연구 및 개발’로 한정되며, 제3자에게 양도,
                대여, 그 밖의 용도로 이용할 수 없음을 원칙으로 합니다. ② 자료에
                포함된 정보(개인정보 등)를 ‘인식기술 연구 및 개발’ 외의 용도로
                이용하기 위해서는 사전에 용도를 설명하고 개인정보의 안정성
                확보를 위한 구체적인 조치방안(개인정보 보호, 민감정보 필터링
                등)을 제시한 후 (주)미디어그룹사람과숲의 동의를 받아야 합니다.
                4장 계약당사자의 의무 15. 회원의 의무 및 정보보안 ① 이용자는
                회원가입 신청 또는 회원정보 변경 시 실명으로 모든 사항을 사실에
                근거하여 작성하여야 하며, 허위 또는 타인의 정보를 등록할 경우
                일체의 권리를 주장할 수 없습니다. ② 당 사이트가 관계법령 및
                개인정보 보호정책에 의거하여 그 책임을 지는 경우를 제외하고
                회원에게 부여된 ID의 비밀번호 관리소홀, 부정사용에 의하여
                발생하는 모든 결과에 대한 책임은 회원에게 있습니다. ③ 회원은 당
                사이트는 및 제 3자의 지적 재산권을 침해해서는 안 됩니다. ④
                회원은 이 약관 및 관계법령에서 규정한 사항을 준수하여야 합니다.
                16. (주)미디어그룹사람과숲의 의무 ① 당 사이트는 특별한 사정이
                없는 한 회원이 신청한 서비스 제공 개시일에 서비스를 이용할 수
                있도록 합니다. ② 이 약관에서 정한 바에 따라 계속적으로 서비스를
                제공할 의무가 있습니다. ③ 당 사이트가 제공하는 서비스로 인하여
                회원에게 손해가 발생한 경우 그러한 손해가 당 사이트의 고의나
                중과실에 기해 발생한 경우에 한하여 당 사이트에서 부담하며, 그
                책임의 범위는 통상손해에 한합니다. ④ 당 사이트는 회원으로부터
                제기되는 의견이나 불만이 정당하다고 인정할 경우에는 신속히
                처리하여야 합니다. 다만, 신속한 처리가 곤란한 경우에는 회원에게
                그 사유와 처리일정을 통보하여야 합니다. 5장 계약해지 17.
                계약해지 및 이용제한 ① 회원이 이용계약을 해지하고자 하실 때에는
                회원 본인이 직접 인터넷을 통해 당 사이트에 해지 신청을 할 수
                있습니다. ② 당 사이트는 보안 및 아이디 정책, 서비스의 원활한
                제공 등과 같은 이유로 회원의 ID 및 PASSWORD 변경을 요구하거나
                변경 할 수 있습니다. ③ 당 사이트는 회원이 다음 각 호에 해당하는
                행위를 하였을 경우 사전통지 없이 이용계약을 해지할 수 있습니다.
                1. 회원이 제공한 데이터가 허위임이 판명된 경우 2. 범죄적 행위에
                관련되는 경우 3. 국익 또는 사회적 공익을 저해할 목적으로 서비스
                이용을 계획 또는 실행할 경우 4. 타인의 서비스 아이디 및 비밀
                번호를 도용한 경우 5. 서비스에 위해를 가하는 등 서비스의 건전한
                이용을 저해하는 경우 6. 기타 관련법령이나
                (주)미디어그룹사람과숲이 정한 이용조건에 위배되는 경우 6장 기타
                18. 양도금지 회원은 서비스의 이용권한, 기타 이용계약상의 지위를
                타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.
                19. 손해배상 무료로 제공되는 서비스와 관련하여 회원에게 어떠한
                손해가 발생하더라도 동 손해가 당 사이트의 중대한 과실에 의한
                경우를 제외하고 이에 대하여 책임을 부담하지 아니합니다. 20.
                면책조항 ① 당 사이트는 천재지변 또는 이에 준하는 불가항력으로
                인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한
                책임이 면제됩니다. ② 회원의 귀책사유로 인한 서비스이용의 장애에
                대하여 책임을 지지 않습니다. ③ 회원이 서비스를 이용하여 기대하는
                이익이나 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을
                지지 않습니다. ④ 회원이 서비스에 게재한 정보, 자료, 사실의
                신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다. 21.
                관할 법원 서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는
                경우 민사 소송법상의 관활 법원에 제기합니다. 22. 회원의 정보
                보안 ① 회원이 포털의 회원가입 절차를 완료하는 순간부터 회원은
                ID와 비밀번호 등 관련 정보를 안전하게 관리할 책임이 있으며, 해당
                책임을 다하지 않음으로써 발생하는 결과에 대한 모든 책임은 회원이
                부담합니다. ② 회원은 자신의 ID나 비밀번호가 부정하게
                사용되었다는 사실을 발견한 경우 즉시 운영기관에 신고하여야
                합니다. 신고를 하지 않음으로 인해 발생한 결과에 대한 모든 책임은
                회원이 부담합니다. ③ 회원은 포털 서비스를 정상적으로 종료하지
                아니하여 제3자가 회원에 관한 정보를 이용하게 되는 등의 결과가
                발생하는 경우 관련 손해 등 법적 문제에 대하여 운영기관은 책임을
                지지 않습니다. 23. 식별된 개인정보 및 지식재산권 ① 자료 조회에
                게시된 데이터는 개인 차량번호, 얼굴 등의 개인정보와 공공기관 및
                제3자의 지식재산이 포함될 수 있습니다. 따라서 이용 시 관련
                권리가 침해되지 않도록 유의하여야 합니다. ② 회원은 운영기관의
                승인 없이 포털 서비스에 대한 지식재산을 이용하거나 제3자로
                하여금 이용하게 해서는 안됩니다. 자료 이용에 따른 개인정보 또는
                지식재산 침해 등의 피해가 발생한 경우 제공기관은 책임을 지지
                않습니다. ③ 자료 이용의 과정에서 발생하는 개인정보 또는
                지식재산에 관련된 피해가 발생하는 경우 관련 손해 등 법적 문제에
                대하여 모든 책임은 회원이 부담 합니다. 24. 책임제한 ① 제공기관은
                공공데이터의 제공과 관련하여 공공데이터의 품질, 공공데이터의
                제공중단 등 공공데이터법 제36조에서 규정하는 사유로 이용자 또는
                제3자에게 손해가 발생한 경우 그에 대한 책임을 지지 않습니다. ②
                공공데이터법 제36조제3항에 따라 이용자는 제3자의 권리가 포함된
                공공데이터가 제공된 경우 이를 이용하였더라도 진정한 권리자에게
                발생한 손해에 대하여 책임을 지지 않습니다. 다만 제3자의 권리가
                포함된 사실을 인지하고 이용한 경우는 제외됩니다. ③ 운영기관은
                회원의 포털서비스 이용과 관련하여 회원 또는 제3자에게 손해가
                발생하더라도 책임을 지지 않습니다. 다만 해당 손해가 운영기관의
                범죄행위 등으로 인해 발생한 경우에는 예외로 합니다. 부칙
                (시행일) 이 약관은 2021년 1월 1일부터 적용합니다.
              </article>
            </div>
          </Scrollbars>
        </div>
        <FilledButton type="button" onClick={onAgreeClick}>
          동의하기
        </FilledButton>
      </StyledDialog>
    </>
  );
};

export default PolicyDialog;
