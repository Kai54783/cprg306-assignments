import Link from 'next/link';

const StudentInfo = () => {
    return (
        <div>
            <h1>StudentInfo</h1>
            <p>Kai-Wei, Wang</p>
            <p>
                GitHub Repository: 
                <Link href="https://github.com/Kai54783?tab=repositories">
          My GitHub Repository</Link>
            </p>
        </div>
    );
};

export default StudentInfo;