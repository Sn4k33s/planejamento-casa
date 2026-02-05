# 🏠 Planejamento da Minha Casa - Versão 3.0 com BLOB

**VERSÃO SIMPLIFICADA**: Usa o Vercel Blob (mais fácil de configurar!) 🎉

---

## 🚀 PASSO A PASSO COMPLETO

### **PASSO 1: GitHub**

1. **Descompacte o ZIP**

2. **Vá para GitHub.com** e faça login

3. **Delete o repositório antigo** (se tiver):
   - Vá no repositório antigo
   - Settings (no fim da página)
   - Role até embaixo → "Delete this repository"
   - Confirme

4. **Crie um NOVO repositório**:
   - Clique no **"+"** → **"New repository"**
   - Nome: `planejamento-casa`
   - Deixe como **Public**
   - **NÃO marque nada**
   - Clique em **"Create repository"**

5. **Faça upload**:
   - Clique em **"uploading an existing file"**
   - Arraste todos os arquivos:
     - ✅ `package.json`
     - ✅ `vercel.json`
     - ✅ Pasta `api`
     - ✅ Pasta `public`
     - ✅ `README.md`
   - Clique em **"Commit changes"**

---

### **PASSO 2: Vercel Deploy**

1. **Vá para Vercel.com**

2. **Delete o projeto antigo** (se tiver):
   - Vá no projeto
   - Settings
   - Role até "Delete Project"
   - Delete

3. **Importe o NOVO**:
   - Clique em **"Add New..." → "Project"**
   - Selecione `planejamento-casa`
   - Clique em **"Import"**
   - **NÃO ALTERE NADA**
   - Clique em **"Deploy"**

4. **Aguarde** (1-2 minutos)

---

### **PASSO 3: Configurar BLOB** ⭐⭐⭐

**ESTA É A PARTE MAIS IMPORTANTE!**

#### **Opção A: Pelo Menu Storage (Mais Fácil)**

1. **No seu projeto Vercel**, procure no **menu lateral esquerdo**:
   - Clique em **"Storage"**

2. **Clique em "Create Database"**

3. **Escolha "Blob"**:
   - Se não aparecer direto, procure na lista
   - É o que tem ícone de nuvem/arquivo

4. **Configuração**:
   - Database Name: `casa-storage` (ou qualquer nome)
   - Clique em **"Create"**

5. **Conectar**:
   - Você vai ver uma tela perguntando para conectar
   - Marque o checkbox do projeto `planejamento-casa`
   - Clique em **"Connect"** ou **"Connect to Project"**

6. **REDEPLOY**:
   - Volte para o projeto
   - Aba **"Deployments"**
   - **3 pontinhos (...)** no último deploy
   - **"Redeploy"**
   - Aguarde terminar

#### **Opção B: Pelo Marketplace**

1. **Na página inicial do Vercel** (não no projeto)
   - Clique em **"Storage"** no menu superior

2. **Ou vá direto**: https://vercel.com/storage

3. **Clique em "Create Database"**

4. **Escolha "Blob"**

5. **Siga os passos 4, 5 e 6 da Opção A**

---

### **PASSO 4: Verificar se Conectou**

1. **No projeto, vá em "Settings"**

2. **Clique em "Environment Variables"**

3. **Você DEVE ver**:
   - `BLOB_READ_WRITE_TOKEN` ✅
   
   **Se NÃO estiver lá:**
   - Volte ao Storage
   - Clique no banco Blob
   - Clique em "Connect to Project"
   - Selecione seu projeto
   - Faça Redeploy novamente

---

### **PASSO 5: Testar!**

1. **Abra o link do seu site** (ex: `planejamento-casa.vercel.app`)

2. **No computador**:
   - Adicione um cômodo: "Sala"
   - Adicione um móvel: "Sofá"

3. **No celular**:
   - Abra o mesmo link
   - Deve aparecer "Sala" e "Sofá"! 🎉

4. **Feche tudo e abra de novo** - continua lá!

---

## ✅ Como saber se está funcionando?

✅ Quando você adiciona algo, aparece: **"✅ Salvo automaticamente!"**
✅ Abre no celular e os dados estão lá
✅ Recarrega a página e tudo continua
✅ No Vercel Settings → Environment Variables você vê `BLOB_READ_WRITE_TOKEN`

---

## 🆘 Solução de Problemas

### **"Não aparece no celular"**
❌ O Blob não está conectado ao projeto
✅ **Solução**:
1. Vá em Storage no Vercel
2. Clique no seu banco Blob
3. Clique em "Connect to Project"
4. Marque seu projeto
5. Faça REDEPLOY

### **"Dá erro 500 ao salvar"**
❌ Falta a variável `BLOB_READ_WRITE_TOKEN`
✅ **Solução**:
1. Settings → Environment Variables
2. Se não tiver `BLOB_READ_WRITE_TOKEN`, reconecte o Blob
3. Faça REDEPLOY

### **"Não encontro o Storage"**
✅ Procure no **menu lateral esquerdo** do projeto
✅ Ou vá em: https://vercel.com/storage
✅ Ou procure por "Marketplace" e busque "Blob"

### **"Conectei mas ainda não funciona"**
✅ **Você FEZ REDEPLOY depois de conectar?**
   - Isso é OBRIGATÓRIO!
   - Deployments → 3 pontinhos → Redeploy

---

## 🎯 Checklist Final

Antes de testar, confirme:

- [ ] Upload no GitHub ✅
- [ ] Deploy no Vercel ✅
- [ ] **Criou banco BLOB** ✅
- [ ] **Conectou o Blob ao projeto** ✅
- [ ] **Vê BLOB_READ_WRITE_TOKEN nas variáveis** ✅
- [ ] **Fez REDEPLOY** ✅
- [ ] Testou em dois dispositivos ✅

---

## 💡 Por que BLOB?

- ✅ Mais fácil de encontrar no Vercel
- ✅ Mesmo resultado que KV
- ✅ 100% grátis
- ✅ Perfeito para salvar JSON
- ✅ Funciona em todos os dispositivos

---

## 📸 Onde encontrar cada coisa no Vercel:

```
DASHBOARD DO PROJETO:
├── Deployments (para redeploy)
├── Storage (para criar/conectar Blob)
├── Settings
    └── Environment Variables (ver se conectou)

OU

PÁGINA INICIAL VERCEL:
└── Storage (menu superior) → Create Database → Blob
```

---

**Agora vai funcionar de verdade! 💪**

Qualquer problema, me avisa! 😊
