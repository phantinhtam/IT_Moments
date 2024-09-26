import React from 'react'
import Thumbnail1 from '../images/ban-ket-cuoc-thi-khoi-nghiep-2024.jpg'
import Thumbnail2 from '../images/hoi-nghi-trien-khai-thong-tu-242024tt-btc-va-pho-bien-phap-lenh-xu-phat-trong-linh-vuc-kiem-toan.jpg'
import Thumbnail3 from '../images/hoi-thao-quoc-te-ve-kinh-te-lan-2-2nd-international-conference-on-economics-ice-2024.jpg'
import Thumbnail4 from '../images/to-chuc-hoi-nghi-thong-tin-thoi-su-tuyen-truyen-ve-tinh-hinh-bien-dao-nam-2024.jpg'
import Thumbnail5 from '../images/to-chuc-le-tot-nghiep-va-trao-bang-tot-nghiep-dot-1-nam-2024.jpg'
import Thumbnail6 from '../images/cuoc-thi-khoi-nghiep-14.jpg'


const Slide = () => {
    return (
        <div class="slide">
            <div class="item" >
                <div>
                    <img src={Thumbnail1} alt="" />
                </div>
                <div class="content">
                    <div class="name">Switzerland</div>
                    <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" >
                <div>
                    <img src={Thumbnail2} alt="" />
                </div>
                <div class="content">
                    <div class="name">Switzerland</div>
                    <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" >
                <div>
                    <img src={Thumbnail3} alt="" />
                </div>
                <div class="content">
                    <div class="name">Switzerland</div>
                    <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" >
                <div className="post-sidebar__thumbnail"img src={Thumbnail4} alt="" />
                </div>
                <div class="content">
                    <div class="name">Switzerland</div>
                    <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" >
                <div className="post-sidebar__thumbnail">
                    <img src={Thumbnail5} alt="" />
                </div>
                <div class="content">
                    <div class="name">Switzerland</div>
                    <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" >
                <div className="post-sidebar__thumbnail">
                    <img src={Thumbnail6} alt="" />
                </div>
                <div class="content">
                    <div class="name">Switzerland</div>
                    <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
        </div>
    )
}

export default Slide
