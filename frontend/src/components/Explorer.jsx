import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getBalance, getTx, getBlock, getLastBlock } from "./api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export function Explorer() {
  return (
    <div>
      <h2>Explorer</h2>
    </div>
  );
}
