import DefaultTextField from './components/DefaultTextField';
import Label from './components/Label';

function App() {
  return (
    <div>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        placeholder="이메일을 입력하세요"
        value=""
        errorMessage="이메일을 확인해주세요"
        isError={false}
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        iconAlt="delete"
        onChange={() => {}}
        onIconClick={() => {}}
      />
      <Label htmlFor="email">주소</Label>
      <DefaultTextField
        id="address"
        placeholder="주소을 입력하세요"
        value=""
        errorMessage="주소을 확인해주세요"
        isError={false}
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        iconAlt="delete"
        onChange={() => {}}
        onIconClick={() => {}}
      />
    </div>
  );
}

export default App;
