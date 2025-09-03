import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import classes from './CompleteItems.module.css'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// ① 让 Vite 把 worker 当作静态资源处理，并返回真实 URL
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { useContext, useState } from 'react';
import { TodosContext } from '../../../../store/TodosManagaeContext';
import { Loading } from './CompleteItemsIntro';

// ② 告诉 pdf.js 使用上面的 worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function CompleteItems({ slot }) {

    const ctx = useContext(TodosContext);
    const section = slot === 'future' ? ctx.future : ctx.done;
    const file = section.content;

    const [numPages, setNumPages] = useState(null);   // 控制 PDF 的总页数
    const [pageNumber, setPageNumber] = useState(1);  // 当前显示的页码
    const [progress, setProgress] = useState(0);      // 当前加载的进度

    // 参数结构 { numPages } 是 react-pdf 固定传过来的
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setProgress(100);   // 加载完成，设为100%
    }

    function onLoadProgress({ loaded, total }) {
        const percent = Math.round((loaded / total) * 100);
        setProgress(percent);
    }

    return (
        <div>
            <div className={classes.fileContainer}>
                <Document
                    file={file}
                    loading={<Loading progress={progress} state={section.active} />}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadProgress={onLoadProgress}  // 关键：加载进度
                >
                    <Page pageNumber={pageNumber} scale={0.85} />
                </Document>
            </div>
            {section.active && <div>
                <button
                    onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                    disabled={pageNumber <= 1}
                >
                    上一页
                </button>
                <span>  {pageNumber} / {numPages || 0}  </span>
                <button
                    onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages || 1))}
                    disabled={pageNumber >= (numPages || 1)}
                >
                    下一页
                </button>
            </div>}
        </div>


    );

}