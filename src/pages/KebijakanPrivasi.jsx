import React from "react";
import styled from 'styled-components';
import HOC from "../components/HOC";
import { MdArrowBack} from "react-icons/md"

const PrivasiDetail = styled.section`
    padding: 100px 80px;
    dipslay: flex;
    flex-direction: column;
    gap: 20px;
`
const TitlePrivasi = styled.h1`
`
const TopPrivasi = styled.div`
    display: flex;
    justify-content: space-between;
`
const DetailKetentuan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    p{
        align-text: justify;
    }
`
const BackTo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

`;
const Back = styled.div`
    font-size: 12px;
    color: #F2A600;
`

const KebijakanPrivasi = () => {
    return (
    <HOC>
        <>
        <PrivasiDetail>
            <TopPrivasi>
                <BackTo>
                    <MdArrowBack style={{color: '#F2A600'}} />
                    <Back>Kembali</Back>
                 </BackTo>
                <TitlePrivasi>
                    Ketentuan & Kebijakan Privasi
                </TitlePrivasi>      
            </TopPrivasi>
            <DetailKetentuan>
                <h2>Ketentuan</h2>
                <p>Re4Cash berkomitmen untuk melindungi data Pengguna dan mematuhi semua undang-undang perlindungan data dan privasi yang berlaku.
Selain mengumpulkan dan memproses data yang Anda bagikan dengan kami untuk alasan tertentu (seperti memproses transaksi, keperluan administrasi akun Re4Cash Anda), Re4Cash mungkin perlu mengungkapkan data pribadi Anda kepada pihak ketiga tertentu (seperti Penjual, penyedia logistik, atau penyedia layanan pembayaran) untuk memproses pesanan Anda atau untuk tujuan bisnis dan hukum yang sah..
Seperti yang dijelaskan dalam Kebijakan Privasi kami, data pribadi Anda dan informasi lainnya dapat ditransfer, disimpan, atau diproses di luar negara Anda saat ini. Re4Cash hanya akan mentransfer data Anda ke luar negeri sesuai dengan undang-undang privasi yang berlaku.
⚠Catatan
Untuk detail lebih lanjut tentang jenis data yang dikumpulkan, bagaimana data tersebut digunakan dan dibagikan kepada pihak lain, silakan merujuk ke Kebijakan Privasi kami.
Seiring berkembangnya teknologi, hukum, dan bisnis, kami mungkin perlu memperbarui Kebijakan Privasi kami dari waktu ke waktu. Oleh karena itu, kami berhak untuk mengubah atau memperbarui Kebijakan Privasi dan mendorong Anda untuk secara teratur meninjau pemberitahuan ini dan Kebijakan Privasi kami.
Jika Anda telah membagikan data pribadi Anda kepada kami, Anda memiliki hak (tunduk pada hukum yang berlaku) untuk:
Meminta informasi mengenai data pribadi apa saja yang kami miliki tentang Anda.
Meminta perubahan atau pembaruan pada data pribadi Anda.
Meminta data pribadi Anda dihapus.
Silakan merujuk ke Kebijakan Privasi kami untuk lebih jelasnya. Jika Anda tidak ingin kami mengumpulkan data pribadi Anda, Anda dapat memilih keluar kapan saja dengan mengirim email ke Petugas Perlindungan Data kami di re4cash_service@gmail.com. Harap diperhatikan bahwa jika Anda tidak bersedia untuk mengumpulkan, menggunakan, atau memproses data pribadi Anda, maka hal tersebut dapat memengaruhi penggunaan layanan Re4Cash Anda.</p>
            </DetailKetentuan>
            <DetailKetentuan>
                <h2>Kebijakan Privasi</h2>
                <p>Re4Cash berkomitmen untuk melindungi data Pengguna dan mematuhi semua undang-undang perlindungan data dan privasi yang berlaku.
Selain mengumpulkan dan memproses data yang Anda bagikan dengan kami untuk alasan tertentu (seperti memproses transaksi, keperluan administrasi akun Re4Cash Anda), Re4Cash mungkin perlu mengungkapkan data pribadi Anda kepada pihak ketiga tertentu (seperti Penjual, penyedia logistik, atau penyedia layanan pembayaran) untuk memproses pesanan Anda atau untuk tujuan bisnis dan hukum yang sah..
Seperti yang dijelaskan dalam Kebijakan Privasi kami, data pribadi Anda dan informasi lainnya dapat ditransfer, disimpan, atau diproses di luar negara Anda saat ini. Re4Cash hanya akan mentransfer data Anda ke luar negeri sesuai dengan undang-undang privasi yang berlaku.
⚠Catatan
Untuk detail lebih lanjut tentang jenis data yang dikumpulkan, bagaimana data tersebut digunakan dan dibagikan kepada pihak lain, silakan merujuk ke Kebijakan Privasi kami.
Seiring berkembangnya teknologi, hukum, dan bisnis, kami mungkin perlu memperbarui Kebijakan Privasi kami dari waktu ke waktu. Oleh karena itu, kami berhak untuk mengubah atau memperbarui Kebijakan Privasi dan mendorong Anda untuk secara teratur meninjau pemberitahuan ini dan Kebijakan Privasi kami.
Jika Anda telah membagikan data pribadi Anda kepada kami, Anda memiliki hak (tunduk pada hukum yang berlaku) untuk:
Meminta informasi mengenai data pribadi apa saja yang kami miliki tentang Anda.
Meminta perubahan atau pembaruan pada data pribadi Anda.
Meminta data pribadi Anda dihapus.
Silakan merujuk ke Kebijakan Privasi kami untuk lebih jelasnya. Jika Anda tidak ingin kami mengumpulkan data pribadi Anda, Anda dapat memilih keluar kapan saja dengan mengirim email ke Petugas Perlindungan Data kami di re4cash_service@gmail.com. Harap diperhatikan bahwa jika Anda tidak bersedia untuk mengumpulkan, menggunakan, atau memproses data pribadi Anda, maka hal tersebut dapat memengaruhi penggunaan layanan Re4Cash Anda.</p>
            </DetailKetentuan>
        </PrivasiDetail>

        </>
    </HOC>
    );
};

export default KebijakanPrivasi;