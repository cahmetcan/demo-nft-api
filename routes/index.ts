import { Router } from "express";
import { listNFTs, listTransactions} from '../controllers/NFTs';
import { listUsers } from "../controllers/users";


const router: Router = Router();

router.get("/nfts", listNFTs);
router.get("/users", listUsers);
router.get('/transactions', listTransactions);

export default router;
