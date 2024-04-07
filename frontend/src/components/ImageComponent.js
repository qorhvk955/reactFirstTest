import React, { useState, useEffect } from 'react';

function ImageComponent() {
  // 이미지 URL을 저장할 로컬 상태
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // 데이터베이스에서 이미지 URL을 불러오는 가상의 함수
    // 실제로는 API 호출 등을 통해 이 값을 가져와야 함
    const fetchImageUrl = async () => {
      // 예제 URL, 실제로는 API 응답으로부터 받아온 값을 사용해야 함
      const url = 'https://example.com/path/to/your/image.jpg';
      setImageUrl(url);
    };

    fetchImageUrl();
  }, []); // 빈 의존성 배열을 사용해 컴포넌트 마운트 시 한 번만 실행

  return (
    <div>
      {/* 조건부 렌더링을 사용해 이미지 URL이 있을 때만 이미지를 렌더링 */}
      {imageUrl && <img src={imageUrl} alt="Description" />}
    </div>
  );
}

export default ImageComponent;
