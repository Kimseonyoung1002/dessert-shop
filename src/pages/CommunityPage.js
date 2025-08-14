import React, { useEffect } from "react";
import styles from "./CommunityPage.module.css";
import { useState } from "react";

const CommunityPage = () => {
    const [activeTab, setActiveTab] = useState("notice");
    const [freeboardData, setFreeboardData] = useState([]);

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/data/freeboardData.json")
            .then(res => res.json())
            .then(data => setFreeboardData(data));
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>

                <button className={activeTab === "notice" ? styles.active : ""}
                    onClick={() => setActiveTab("notice")}
                >

                    이용안내 FAQ
                </button>

                <button className={activeTab === "freeboard" ? styles.active : ""}
                    onClick={() => setActiveTab("freeboard")}
                >
                    문의
                </button>
            </div>


            <div className={styles.content}>
                {activeTab === "notice" &&

                    (
                        <>
                            <p className={styles.main_title}>자주 묻는 질문을 해결해 드려요!</p>
                            <div className={styles.select_box}>
                                <label></label>
                                <select id="notice_category" name="notice_category">
                                    <option value="all">전체</option>
                                    <option value="delivery">배송</option>
                                    <option value="cancel">취소/교환</option>
                                    <option value="pay">결제</option>
                                    <option>상품</option>
                                </select>
                            </div>


                            <table className={styles.notice_table}>
                                <thead>
                                    <tr>
                                        <td>번호</td>
                                        <td>제목</td>
                                        <td>카테고리</td>
                                        <td>작성자</td>
                                        <td>작성일</td>
                                        <td>조회수</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>질문에 대한 답변은 여기서 확인해주세요</td>
                                        <td>배송</td>
                                        <td>봄날엔</td>
                                        <td>2024-04-18</td>
                                        <td>11485</td>
                                    </tr>
                                </tbody>
                            </table>


                            <div className={styles.table_bottom}>

                                <div className={styles.duration}>
                                    <label></label>
                                    <select id="duration_category" name="duration_category">
                                        <option value="week">일주일</option>
                                        <option value="month">한달</option>
                                        <option value="months">세달</option>
                                        <option value="all">전체</option>
                                    </select>
                                </div>

                                <div className={styles.title}>
                                    <label></label>
                                    <select id="title_category" name="title_category">
                                        <option value="title">제목</option>
                                        <option value="content">내용</option>
                                        <option value="writer">글쓴이</option>
                                        <option value="nickname">별명</option>
                                    </select>
                                </div>
                                <div className={styles.search_box}>
                                    <input type="search" />
                                    <button className={styles.search_button}>찾기</button>

                                </div>

                            </div>
                        </>
                    )
                }
                {activeTab === "freeboard" &&

                    (

                        <>

                            <p className={styles.main_title}>봄날엔 고객센터 게시판</p>
                            <div className={styles.select_box}>
                                <label></label>
                                <select id="notice_category" name="notice_category">
                                    <option value="all">전체</option>
                                    <option value="delivery">배송</option>
                                    <option value="cancel">취소/교환</option>
                                    <option value="pay">결제</option>
                                    <option>상품</option>
                                </select>
                            </div>


                            <table className={styles.notice_table}>
                                <thead>
                                    <tr>
                                        <td>번호</td>
                                        <td>상품정보</td>
                                        <td>제목</td>
                                        <td>작성자</td>
                                        <td>작성일</td>
                                        <td>조회수</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {freeboardData.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>
                                                <img src={process.env.PUBLIC_URL +  item.productImage}
                                                    alt={item.title}
                                                    style={{
                                                        width: "60px",
                                                        height: "60px",
                                                        objectFit: "cover",
                                                        borderRadius: "10px",
                                                    }} />
                                            </td>
                                            <td>{item.title}</td>
                                            <td>{item.writer}</td>
                                            <td>{item.date}</td>
                                            <td>{item.views}</td>
                                        </tr>



                                    ))}
                                </tbody>
                            </table>
                            <div className={styles.table_bottom}>
                                <div className={styles.duration}>
                                    <label></label>
                                    <select id="duration_category" name="duration_category">
                                        <option value="week">일주일</option>
                                        <option value="month">한달</option>
                                        <option value="months">세달</option>
                                        <option value="all">전체</option>
                                    </select>
                                </div>

                                <div className={styles.title}>
                                    <label></label>
                                    <select id="title_category" name="title_category">
                                        <option value="title">제목</option>
                                        <option value="content">내용</option>
                                        <option value="writer">글쓴이</option>
                                        <option value="nickname">별명</option>
                                    </select>
                                </div>
                                <div className={styles.search_box}>
                                    <input type="search" />
                                    <button className={styles.search_button}>찾기</button>

                                </div>

                            </div>



                        </>
                    )





                }
            </div>
        </div>

    );


};








export default CommunityPage;